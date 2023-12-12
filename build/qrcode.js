"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qrcode_1 = __importDefault(require("qrcode"));
const path_1 = __importDefault(require("path"));
qrcode_1.default.toFile(path_1.default.join(__dirname, "qrcode.png"), "random data here", (err) => {
    if (err) {
        console.log(err);
    }
});
