const Newsletter = require("../models/newsletter");

module.exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const exists = await Newsletter.findOne({ email });

    if (exists) {
      req.flash("error", "You're already subscribed with this email.");
      return res.redirect(req.get("Referrer") || "/listings");
    }

    await Newsletter.create({ email });

    req.flash(
      "success",
      "Thanks for subscribing! Check your inbox for travel inspiration."
    );

    res.redirect(req.get("Referrer") || "/listings");

  } catch (err) {
    console.error("Newsletter Subscription Error:", err);

    req.flash("error", "Subscription failed.");
    res.redirect(req.get("Referrer") || "/listings");
  }
};