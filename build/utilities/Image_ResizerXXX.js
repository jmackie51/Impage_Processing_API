"use strict";
// import express from 'express';
// import { existsSync, mkdir } from 'fs';
// import resizingUtility from './utilities';
// //---------------------------------------------------------------
// // Take the requested image and resize it based on URL parameters
// //---------------------------------------------------------------
// const imageResizer = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
//   //get parameters from url
//   const fileName = req.query.filename;
//   const width = Number(req.query.width);
//   const height = Number(req.query.height);
//   const path = `/home/workspace/images/thumbnails/${fileName}_${width}_${height}.jpg`;
//   let retString = ``;
//   //create resized images path if not exists
//     if (!existsSync('images/thumbnails/')) {
//         mkdir('images/thumbnails', { recursive: false }, (err) => {
//             if (err) throw err;
//         })
//     }
//   //if the width or height parameters were not set correctly in the URL then let the user know.  Otherwise resize the image
//   if (isNaN(height) && isNaN(width) && fileName === undefined) {
//     retString =
//       "No URL parameters found.  Be sure to use the following parameter format in the URL /resize/?filename=<...>&width=<...>&height=<...>'";
//     res.send(retString);
//   } else if (isNaN(height)) {
//     retString = 'Height parameter not found';
//     res.send(retString);
//   } else if (isNaN(width)) {
//     retString = 'Width parameter not found';
//     res.send(retString);
//   } else {
//     //Note request on console
//     console.log(`Requsted Image: ${fileName} to size: ${width} X ${height}`);
//     //use file system to see if reqested image size has already been processed.
//     //if so the resized file will be shown. Otherwise use sharp to resize the photo
//     if (existsSync(path)) {
//       retString = `Image has already been processed.  Using file: ` + path;
//     } else {
//       //Call the resizing utility
//         await resizingUtility(`/home/workspace/images/full/${fileName}.jpg`, path, width, height);
//         res.sendFile(`/home/workspace/images/thumbnails/${fileName}_${width}_${height}.jpg`);
//         retString = `Image has been created and stored at the following path: ` +  path;
//     }
//   }
//   next();
//   console.log(retString);
// };
// export default imageResizer;
