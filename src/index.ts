import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000; //set port

// apply router as middleware
app.use('/api', routes);

//Start server
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
