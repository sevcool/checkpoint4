const router = require("express").Router();

const { ImageController, UploadController } = require("../controllers");

router.get("/", ImageController.browse);
router.get("/:id", ImageController.read);
router.post("/", UploadController.uploadImage, ImageController.add);
router.put("/:id", ImageController.edit);
router.delete("/:id", ImageController.delete);

module.exports = router;
