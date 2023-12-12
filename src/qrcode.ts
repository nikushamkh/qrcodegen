import QRCode from "qrcode";
import path from "path";

QRCode.toFile(path.join(__dirname, "qrcode.png"), "random data here", (err) => {
  if (err) {
    console.log(err);
  }
});
