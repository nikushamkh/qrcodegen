import QRCode from "qrcode";
import express from "express";

const app = express();

QRCode.toString("data goes here", (err, data) => {
  if (err) throw err;
  console.log(data);
});
