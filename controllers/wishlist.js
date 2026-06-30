const User = require("../models/user");


module.exports.addWishlist = async (req, res) => {
  let { id } = req.params;

  let user = await User.findById(req.user._id);

  if (!user.wishlist.includes(id)) {
    user.wishlist.push(id);
    await user.save();
  }

  req.flash("success", "Added to Wishlist");
  res.redirect(`/listings/${id}`);
};

module.exports.removeWishlist = async (req, res) => {
  let { id } = req.params;

  await User.findByIdAndUpdate(req.user._id, {
    $pull: {
      wishlist: id,
    },
  });

  req.flash("success", "Removed from Wishlist");
  res.redirect(`/listings/${id}`);
};

module.exports.showWishlist = async (req, res) => {
  const user = await User.findById(req.user._id).populate("wishlist");

  res.render("users/wishlist.ejs", {
    listings: user.wishlist || [],
  });
};
