"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qrcode_1 = __importDefault(require("qrcode"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
qrcode_1.default.toString("data goes here", (err, data) => {
    if (err)
        throw err;
    console.log(data);
});
