const express = require("express");

const userRoutes = require("./user.routes");
const projetRoutes = require("./projet.routes");
const imageRoutes = require("./image.routes");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/projet", projetRoutes);
router.use("/image", imageRoutes);

module.exports = router;
