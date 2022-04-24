"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("./api/resize"));
const routes = express_1.default.Router();
//respond to route without /resize path url component
routes.get('/', (req, res) => {
    res.send('Use the following URL extension and prameters to resize images: /api/resize/?filename=<...>&width=<...>&height=<...>');
});
//apply individual route as middleware and set the path to use
routes.use('/resize', resize_1.default);
exports.default = routes;
