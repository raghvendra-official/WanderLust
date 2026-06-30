const express = require("express");
const wrapAsync = require("../utils/wrapAsync.js");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

//require controllers
const {
  signup,
  login,
  renderSignupForm,
  renderLoginForm,
  logout,
} = require("../controllers/users.js");

//router.route for SignUp
router.route("/signup").get(renderSignupForm).post(wrapAsync(signup));

//router.route for Login
router
  .route("/login")
  .get(renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(login),
  );

//Signup form
//router.get("/signup",renderSignupForm)

//Signup submit
//router.post("/signup", wrapAsync(signup));

//Login Form
//router.get("/login",renderLoginForm);

//Login Submit
//router.post("/login",saveRedirectUrl , passport.authenticate("local",{failureRedirect:'/login', failureFlash: true}), wrapAsync(login));
// =====================================================
// ADD THESE TWO ROUTES HERE
// =====================================================

// Redirect user to Google
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);

// Google callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", "Welcome to WanderLust!");
    res.redirect("/listings");
  },
);
//Logout
router.get("/logout", logout);

module.exports = router;
