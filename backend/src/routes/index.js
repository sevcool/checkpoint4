const express = require("express");

const photoRoutes = require("./photo.routes");
const userRoutes = require("./user.routes");
const projetRoutes = require("./projet.routes");

const router = express.Router();

router.use("/photo", photoRoutes);
router.use("/user", userRoutes);
router.use("/projet", projetRoutes);

module.exports = router;
