const router = require("express").Router();

const imageRoutes = require("./image.routes");

router.use("/images", imageRoutes);

module.exports = router;
