import userAuth from '../auth/user';
import tokenValidator from '../auth/tokenValidator';

const userRoutes = (router) => {
  router.route('/user/login').post(userAuth.login);
  router.route('/user/signup').post(userAuth.signup);
  router
    .route('/m/protected')
    .post(tokenValidator.validateToken, (req, res) =>
      res.status(200).send({ success: true, message: 'Token is valid' }));
};

export default userRoutes;
