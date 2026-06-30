if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;

const dbUrl = process.env.ATLASDB_URL;

//MongoDB session store
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
    touchAfter: 24 * 60 * 60, // time period in seconds
  },
});

const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models/user.js");
const wrapAsync = require("./utils/wrapAsync.js");

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const wishlistRouter = require("./routes/wishlist");
const newsletterRouter = require("./routes/newsletter");

main()
  .then(() => {
    console.log("connection sussessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

store.on("error", (e) => {
  console.log("Session store error", e);
});

//session
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
//flash- should be declare before routes
app.use(flash());

//passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,

      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      callbackURL:
        process.env.NODE_ENV === "production"
          ? "https://wanderlust-5c2r.onrender.com/auth/google/callback"
          : "http://localhost:8080/auth/google/callback",
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({
          googleId: profile.id,
        });

        if (user) {
          return done(null, user);
        }

        user = await User.create({
          googleId: profile.id,

          username: profile.displayName,

          email: profile.emails[0].value,
        });

        done(null, user);
      } catch (err) {
        done(err, null);
      }
    },
  ),
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;

  // Make search available in every EJS file
  res.locals.search = req.query.search || "";

  next();
});

//passport route
app.get(
  "/demouser",
  wrapAsync(async (req, res) => {
    let fakeUser = new User({
      email: "fake@gmail.com",
      username: "delta-student",
    });

    let registeredUser = await User.register(fakeUser, "helloworld");
    res.send(registeredUser);
  }),
);

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);
app.use("/wishlist", wishlistRouter);
app.use("/newsletter", newsletterRouter);
app.get("/", (req, res) => {
    res.redirect("/listings");
});

// 404 handler
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

// error handler
app.use((err, req, res) => {
    res.status(err.statusCode || 500);
    res.render("error.ejs", { err });
});

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});




// Health Check Route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date()
    });
});