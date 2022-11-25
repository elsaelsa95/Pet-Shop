const router = require("express").Router();

const routerUser = require("./routerUser");
const routerPet = require("./routerPet");
const routerBooking = require("./routerBooking")
const authentication = require("../middlewares/authentication");

router.use("/users", routerUser);

router.use(authentication);

router.use("/pets", routerPet);

router.use("/bookings", routerBooking)

module.exports = router;
