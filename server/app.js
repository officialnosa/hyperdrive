import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes';

const app = express();
const router = express.Router();
app.use(morgan('dev'));

const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(router);
app.use('/api', router);

app.use('/*', (req, res) => res.status(200).send({ message: "Api up and running" }));

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
