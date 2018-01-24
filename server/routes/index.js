import userRoutes from './userRoutes';

const routes = (router) => {
  router.route('/').get((req, res) => {
    res.status(200).send({ message: 'Welcome to HyperDrive Backend' });
  });
  userRoutes(router);
};

export default routes;
