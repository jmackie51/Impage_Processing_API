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
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const Image_Resizer_1 = __importDefault(require("./../../utilities/Image_Resizer"));
const app = (0, express_1.default)();
const resize = express_1.default.Router();
// Define the static file path
resize.use(express_1.default.static('/home/workspace'));
resize.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //get parameters from url
    const fileName = req.query.filename;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const path = `/home/workspace/images/thumbnails/${fileName}_${width}_${height}.jpg`;
    let retString = ``;
    //create resized images path if not exists
    if (!(0, fs_1.existsSync)('images/thumbnails/')) {
        (0, fs_1.mkdir)('images/thumbnails', { recursive: false }, (err) => {
            if (err)
                throw err;
        });
    }
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
        try {
            //use file system to see if reqested image size has already been processed.
            //if so the resized file will be shown. Otherwise use sharp to resize the photo
            if ((0, fs_1.existsSync)(path)) {
                retString = `Image has already been processed.  Using file: ` + path;
            }
            else {
                //Call the resizing utility
                yield (0, Image_Resizer_1.default)(`/home/workspace/images/full/${fileName}.jpg`, path, width, height);
                retString = `Image has been created and stored at the following path: ` + path;
            }
            res.sendFile(path);
        }
        catch (e) {
            console.error('error getting the image path', e);
            res.send(`Error: ${e}`);
        }
    }
    console.log(retString);
}));
exports.default = resize;
