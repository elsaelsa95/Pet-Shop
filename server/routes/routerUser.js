const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const authorizationUser = require("../middlewares/authorizationUser");
const Controller = require("./../controller/user");

router.post("/register", Controller.register);
router.post("/login", Controller.login);

router.use(authentication);

router.get("/:id", authorizationUser, Controller.detail);
router.put("/:id", authorizationUser, Controller.edit);
router.delete("/:id", authorizationUser, Controller.delete);

module.exports = router;
