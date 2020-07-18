var express         = require("express"),
    app             = express(),
    expressLayouts  = require('express-ejs-layouts'),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    cookieParser    = require("cookie-parser"),
    LocalStrategy   = require("passport-local"),
    bcrypt          = require('bcryptjs'),
    passportLocalMongoose = require("passport-local-mongoose"),
    async           = require("async"),
    crypto          = require("crypto"),
    nodemailer      = require("nodemailer"),
    middleware      = require("./middleware"),
    session         = require("express-session"),
    methodOverride  = require("method-override"),
    flash           = require("connect-flash"),
    Accessory       = require("./models/accessory"),
    Apparel         = require("./models/apparel"),
    Bag             = require("./models/bag"),
    Bar             = require("./models/bar"),
    Beany           = require("./models/beany"),
    Bike            = require("./models/bike"),
    Blog            = require("./models/blog"),
    Bottom          = require("./models/bottom"),
    Brake           = require("./models/brake"),
    Champagne       = require("./models/champagne"),
    Clearance       = require("./models/clearance"),
    Crank           = require("./models/crank"),
    Fork            = require("./models/fork"),
    Framepart       = require("./models/framePart"),
    Frame           = require("./models/frame"),
    Giftcard        = require("./models/giftcard"),
    Gripbarend      = require("./models/gripBarend"),
    Hat             = require("./models/hat"),
    Hubpart         = require("./models/hubPart"),
    Jacket          = require("./models/jacket"),
    Merch           = require("./models/merch"),
    Miscellaneous   = require("./models/miscellaneous"),
    Mysterybox      = require("./models/mysteryBox"),
    Part            = require("./models/part"),
    Pedalpart       = require("./models/pedalPart"),
    Pedal           = require("./models/pedal"),
    Peghubguard     = require("./models/pegHubguard"),
    Replacementpart = require("./models/replacementPart"),
    Seating         = require("./models/seating"),
    Specialty       = require("./models/specialty"),
    Sprocket        = require("./models/sprocket"),
    Stemheadset     = require("./models/stemHeadset"),
    Sticker         = require("./models/sticker"),
    Sweatshirt      = require("./models/sweatshirt"),
    Tshirt          = require("./models/tShirt"),
    Tire            = require("./models/tire"),
    Return          = require("./models/return"),
    User            = require("./models/user");
    

//requiring routes
var blogRoutes       = require("./routes/blogs"),
    collectionRoutes = require("./routes/collections"),
    indexRoutes      = require("./routes/index"),
    pageRoutes       = require("./routes/pages"),
    paymentRoutes    = require("./routes/payment"); 
   

 

mongoose.connect("mongodb://localhost/kinkbmx", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
require('dotenv').config();

app.use(require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});

passport.use(
    new LocalStrategy({ usernameField: 'email', passReqToCallback : true }, (req, email, password, done) => {
      User.findOne({
        email: email
      }).then(user => {
        if(user){
          bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Incorrect email or password.' });
          }
        });
        } else { 
           return done(null, false, { message: 'Incorrect email or password.' });        }
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

app.use("/", indexRoutes);
app.use("/collections", collectionRoutes);
app.use("/blogs", blogRoutes);
app.use("/pages", pageRoutes);
app.use("/payment",  paymentRoutes);



const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () =>
   console.log(`Server running on port ${PORT}`)
);


