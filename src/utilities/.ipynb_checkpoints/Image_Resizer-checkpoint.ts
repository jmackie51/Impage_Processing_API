import express from 'express';
import sharp from 'sharp';
import { existsSync } from 'fs';

//---------------------------------------------------------------
// Take the requested image and resize it based on URL parameters
//---------------------------------------------------------------
const imageResizer = async (  req: express.Request,  res: express.Response,  next: express.NextFunction): Promise<void> => {
  //get parameters from url
  const fileName = req.query.filename;
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const path = `images/thumbnails/${fileName}_${width}_${height}.jpg`;
  let retString = ``;

  console.log(fileName);
  //if the width or height parameters were not set correctly in the URL then let the user know.  Otherwise resize the image
  if (isNaN(height) && isNaN(width) && fileName === undefined) {
    retString =
      "No URL parameters found.  Be sure to use the following parameter format in the URL /resize/?filename=<...>&width=<...>&height=<...>'";
    res.send(retString);
  } else if (isNaN(height)) {
    retString = 'Height parameter not found';
    res.send(retString);
  } else if (isNaN(width)) {
    retString = 'Width parameter not found';
    res.send(retString);
  } else {
    //Note request on console
    console.log(`Requsted Image: ${fileName} to size: ${width} X ${height}`);

    //use file system to see if reqested image size has already been processed.
    //if so the resized file will be shown. Otherwise use sharp to resize the photo
    if (existsSync(path)) {
      retString = `Image has already been processed.  Using file: ` + path;
    } else {
      //run sharp using parameters to resize image
      await sharp(`images/full/${fileName}.jpg`)
        .resize(width, height)
        .toFile(path) //send image to be stored here for future requests
        .then(() =>
          //inform user where resized image has been stored
          {
            retString =
              `Image has been created and stored at the following path: ` +
              path;
          }
        )
        .catch((err) => {
          //inform user in an error occurs
          retString = `Error: ` + err.message;
          res.send(retString);
        });
    }
  }
  next();
  console.log(retString);
};

export default imageResizer;
