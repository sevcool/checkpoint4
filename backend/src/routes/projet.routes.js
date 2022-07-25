const express = require("express");

const { ProjetController } = require("../controllers");

const router = express.Router();

router.get("/", ProjetController.browse);
router.get("/:id", ProjetController.read);
router.put("/:id", ProjetController.edit);
router.post("/", ProjetController.add);
router.delete("/:id", ProjetController.delete);

module.exports = router;
