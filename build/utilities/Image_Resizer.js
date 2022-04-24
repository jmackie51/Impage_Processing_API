"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = require("fs");
//---------------------------------------------------------------
// Take the requested image and resize it based on URL parameters
//---------------------------------------------------------------
const imageResizer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
    }
    else if (isNaN(height)) {
        retString = 'Height parameter not found';
        res.send(retString);
    }
    else if (isNaN(width)) {
        retString = 'Width parameter not found';
        res.send(retString);
    }
    else {
        //Note request on console
        console.log(`Requsted Image: ${fileName} to size: ${width} X ${height}`);
        //use file system to see if reqested image size has already been processed.
        //if so the resized file will be shown. Otherwise use sharp to resize the photo
        if ((0, fs_1.existsSync)(path)) {
            retString = `Image has already been processed.  Using file: ` + path;
        }
        else {
            //run sharp using parameters to resize image
            yield (0, sharp_1.default)(`images/full/${fileName}.jpg`)
                .resize(width, height)
                .toFile(path) //send image to be stored here for future requests
                .then(() => {
                retString =
                    `Image has been created and stored at the following path: ` +
                        path;
            })
                .catch((err) => {
                //inform user in an error occurs
                retString = `Error: ` + err.message;
                res.send(retString);
            });
        }
    }
    next();
    console.log(retString);
});
exports.default = imageResizer;
