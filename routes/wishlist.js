const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");

const { isLoggedIn } = require("../middleware");

const {
  addWishlist,
  removeWishlist,
  showWishlist,
} = require("../controllers/wishlist");

router.get("/", isLoggedIn, wrapAsync(showWishlist));

router.post("/:id", isLoggedIn, wrapAsync(addWishlist));

router.delete("/:id", isLoggedIn, wrapAsync(removeWishlist));

module.exports = router;
