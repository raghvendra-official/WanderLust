const express = require("express");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

//require controllers
const { signup, login, renderSignupForm, renderLoginForm, logout } = require("../controllers/users.js");

//router.route for SignUp
router.route("/signup")
.get(renderSignupForm)
.post(wrapAsync(signup))

//router.route for Login
router.route("/login")
.get(renderLoginForm)
.post(saveRedirectUrl , passport.authenticate("local",{failureRedirect:'/login', failureFlash: true}), wrapAsync(login));

//Signup form
//router.get("/signup",renderSignupForm)

//Signup submit
//router.post("/signup", wrapAsync(signup));

//Login Form
//router.get("/login",renderLoginForm);

//Login Submit
//router.post("/login",saveRedirectUrl , passport.authenticate("local",{failureRedirect:'/login', failureFlash: true}), wrapAsync(login));

//Logout
router.get("/logout", logout);

module.exports = router;