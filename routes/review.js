const express = require("express");
const wrapAsyn = require("../utils/wrapAsync.js");
const wrapAsync = require("../utils/wrapAsync.js");
const router = express.Router({ mergeParams: true });
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const { createReview, deleteReview } = require("../controllers/reviews.js");

//Review Route
//POST
router.post("/", isLoggedIn, validateReview, wrapAsyn(createReview));

//Delete Review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(deleteReview),
);

module.exports = router;
