"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Image_Resizer_1 = __importDefault(require("../../utilities/Image_Resizer"));
const app = (0, express_1.default)();
const resize = express_1.default.Router();
// Define the static file path
resize.use(express_1.default.static('/home/workspace'));
//get resize endpoint and call the ImageResizer function as middleware
//send the resized image to the browser
resize.get('/', Image_Resizer_1.default, (req, res) => {
    res.sendFile('/home/workspace/frontend/index.html');
});
module.exports = resize;
