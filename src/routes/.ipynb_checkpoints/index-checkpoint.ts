import express from 'express';
import resize from './api/resize';
const routes = express.Router();

//respond to route without /resize path url component
routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    'Use the following URL extension and prameters to resize images: /api/resize/?filename=<...>&width=<...>&height=<...>'
  );
});

//apply individual route as middleware and set the path to use
routes.use('/resize', resize);

export default routes;
