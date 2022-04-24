import express from 'express';
import ImageResizer from '../../utilities/Image_Resizer';

const app = express();
const resize = express.Router();

// Define the static file path
resize.use(express.static('/home/workspace'));

//get resize endpoint and call the ImageResizer function as middleware
//send the resized image to the browser
resize.get(
  '/',
  ImageResizer,
  (req: express.Request, res: express.Response): void => {
    res.sendFile('/home/workspace/frontend/index.html');
  }
);

export = resize;
