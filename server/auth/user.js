import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import {} from 'dotenv/config';
import models from '../models';

const { User } = models;
const jwtSecret = process.env.JWT_SECRET;

export default {
  login: (req, res) => {
    const usernameField = req.body.username || '';
    const phoneField = req.body.phone || '';
    const emailField = req.body.email || '';
    const password = req.body.password || '';

    User.find({
      where: {
        $or: [{ username: usernameField },
          { email: emailField }, { phone: phoneField }]
      }
    })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            success: false,
            message: 'Email/username not associated with any account',
            errors: ['Email/username not associated with any account']
          });
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
          return res.status(401).send({
            success: false,
            message: 'Invalid password',
            errors: ['Invalid password']
          });
        }
        const userInfo = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          username: user.username
        };
        const token = jwt.sign({ id: user.id }, jwtSecret, {
          expiresIn: '2 days' // expires in 48 hours
        });
        userInfo.token = token;
        return res.status(200).send({
          success: true,
          user: userInfo,
          message: 'Successful Signin'
        });
      })
      .catch(err => res.status(401).send({ success: false, err }));
  },
  signup: (req, res) => {
    let firstName = req.body.firstName || '';
    let lastName = req.body.lastName || '';
    let email = req.body.email || '';
    let username = req.body.username || '';
    let password = req.body.password || '';
    let phone = req.body.phone || '';

    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
    username = username.trim();
    password = password.trim();
    phone = phone.trim();

    User.build({
      firstName,
      lastName,
      email,
      phone,
      username,
      password
    })
      .save()
      .then((user) => {
        const userInfo = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          username: user.username
        };
        const token = jwt.sign({ id: user.id }, jwtSecret, {
          expiresIn: '2 days' // expires in 48 hours
        });
        userInfo.token = token;
        return res.status(200).send({
          success: true,
          user: userInfo,
          message: 'Successful Signin'
        });
      })
      .catch((err) => {
        let errors = err;
        if (err.errors) {
          errors = err.errors.map(error => error.message);
        }
        return res.status(401).send({ success: false, errors });
      });
  }
};
