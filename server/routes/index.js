const router = require("express").Router();

const routerUser = require("./routerUser");
const routerPet = require("./routerPet");
const authentication = require("../middlewares/authentication");

router.use("/users", routerUser);

router.use(authentication);

router.use("/pets", routerPet);

module.exports = router;
