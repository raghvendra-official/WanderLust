const express = require("express");
const wrapAsync = require("../utils/wrapAsync.js");
const router = express.Router();
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const { storage } = require("../cloudConfig.js");

const multer = require("multer");
const upload = multer({ storage });

const {
  index,
  renderNewForm,
  editForm,
  deleteListing,
  updateListing,
  createListing,
  showListing,
} = require("../controllers/listings.js");

//router.route of Index and Create
router
  .route("/")
  .get(wrapAsync(index))
  .post(
    isLoggedIn,
    validateListing,
    upload.single("listing[image]"),
    wrapAsync(createListing),
  );

//3New Route
router.get("/new", isLoggedIn, wrapAsync(renderNewForm));

//router.route of Show, Update and delete
router
  .route("/:id")
  .get(wrapAsync(showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(deleteListing));

//Index Route
// router.get("/",wrapAsync(index));

//4Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(editForm));

//1Show Route
//router.get("/:id",wrapAsync(showListing));

//2Create Route
//router.post("/", isLoggedIn, validateListing, wrapAsync (createListing));

//5 Update Route
//router.put("/:id", isLoggedIn, isOwner ,validateListing,wrapAsync(updateListing));

//6 Delete Route
//router.delete("/:id", isLoggedIn,isOwner, wrapAsync(deleteListing));

module.exports = router;
