const router = require("express").Router();
const authorizationPet = require("../middlewares/authorizationPet");
const Controller = require("./../controller/pet");

router.post("/", Controller.create);
router.get("/", Controller.list);

router.get("/:id", authorizationPet, Controller.detail);
router.put("/:id", authorizationPet, Controller.edit);
router.delete("/:id", authorizationPet, Controller.delete);

module.exports = router;
