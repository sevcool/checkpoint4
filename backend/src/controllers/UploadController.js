const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/assets/images"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single("file");

class UploadController {
  static uploadImage(req, res, next) {
    upload(req, res, (err) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      req.body = {
        filename: req.file.filename,
        description: JSON.parse(req.body.imageData).description,
      };
      console.debug(req.body);
      return next();
    });
  }
}

module.exports = UploadController;
