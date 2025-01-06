const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller")
const {SignupSchema, LoginSchema} = require("../Validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");


router.route("/").get(authcontrollers.home);

router
    //.route("/Signup").get(authcontrollers.Signup)
    .route("/Signup")
    .post(authcontrollers.Signup);
router.route("/Login").post(validate(LoginSchema), authcontrollers.Login);

router.route("/user").get(authMiddleware, authcontrollers.user);


module.exports = router;