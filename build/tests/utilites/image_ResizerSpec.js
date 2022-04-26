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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../index"));
const Image_Resizer_1 = __importDefault(require("../../utilities/Image_Resizer"));
const request = (0, supertest_1.default)(index_1.default);
//Test that we do not get any errors when we request an image to be resized via the endpoint
describe('2. Test the Image Resizing functionality', () => {
    it('Expect the resizing endpoint not to throw an error', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/resize/?filename=fjord&width=300&height=207');
        expect(response.error).toBe(false);
        //done();
    }));
    //Test that we do NOT get any errors when we call the resizing utility
    it('expects resizingUtility(`/home/workspace/images/full/fjord.jpg`, `/home/workspace/images/thumbnails/fjord_300_300.jpg`, 300,300) to be resolved', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, Image_Resizer_1.default)(`/home/workspace/images/full/fjord.jpg`, `/home/workspace/images/thumbnails/fjord_300_300.jpg`, 300, 300)).toBeResolved();
    }));
    //Test that we DO get errors when we call the resizing utility with the name of an image that doesnt exist
    it('expects resizingUtility(`/home/workspace/images/full/frd.jpg`, `/home/workspace/images/thumbnails/fjd_300_300.jpg`, 300,300) to be rejected', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, Image_Resizer_1.default)(`/home/workspace/images/full/frd.jpg`, `/home/workspace/images/thumbnails/fjd_300_300.jpg`, 300, 300)).toBeRejected();
    }));
});
