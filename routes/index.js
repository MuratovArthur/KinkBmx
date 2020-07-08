var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");
var flash = require('connect-flash'),
async           = require("async"),
    crypto          = require("crypto"),
    nodemailer      = require("nodemailer"),
 bcrypt          = require('bcryptjs');


router.get('/', (req, res) => res.render('landing'));

router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  const { name, surname, email, password, avatar } = req.body;

  if (!name || !surname || !email || !password) {
    req.flash('error', 'Please enter all of first four fields');
    return res.redirect('back');
  } else{
    if (password.length < 5) {
      req.flash('error', 'Password is too short (minimum is 5 characters)');
      return res.redirect('back');
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        var link  = '/forgot';
        var message =  'This email address is already associated with an account. If this account is yours, you can <a style="color: #d02e2e; text-decoration: underline;" href="'+ link +'"> reset your password</a>'
        req.flash('error',message);
        return res.redirect('back');
      } else {
        const newUser = new User({
          name,
          surname,
          email,
          password,
          avatar
        });

        

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                passport.authenticate("local")(req, res, function(){
                res.redirect("/account"); 
              });
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
  } 

  

 
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/account',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

router.get('/forgot', (req, res) => {
  res.render('forgot');
});

router.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account found with that email.');
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'webdodiks@gmail.com',
         pass: process.env.PASSWORD
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'webdodiks@gmail.com',
        subject: 'Customer account password reset',
        html: 
          '<hr style="margin-top: 5%">'+
          '<img style="width: 150px; height: auto; margin-top: 20px;" src="https://ci4.googleusercontent.com/proxy/U-qHVWR3ClWWs8wS3yKSQh8Q3UUQQ4vDhkSRqikK2wbmAQUYN4XdXXFMLOBsdME_wlDuTNm_Tcyrx6SjPV7pUZvycDSfX-rHAijrcau-Eqv-4hjRJJX0B8xScFEZxBvKjNXIQ9YHYGdw1g=s0-d-e1-ft#https://cdn.shopify.com/s/files/1/0027/8645/9757/email_settings/kinkbmxlogo-01.png?4778">'+
          '<p style="font-size: 24px; color:#222222; font-weight: 400;">Reset your password </p>'+
          '<p style="font-size: 16px; color:#777777; font-weight: 400;">Follow this link to reset your customer account password at Kink BMX. If you did not request a new password, you can safely delete this email.</p>'+
          '<button style=" height: 60px; width: 180px; border-radius: 5px; border: 1px solid #daaa00; background: #daaa00; outline: none;"><a style="color: white; font-size: 16px; text-decoration: none;" href="http://' + req.headers.host + '/reset/' + token + '\n\n">Reset your password</a></button>' +
          '<hr style="margin-top: 5%">'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        console.log('Email has been sent');
        req.flash("success", "We've sent you an email with a link to update your password.");
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});

router.get('/reset/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/forgot');
    }
    res.render('reset', {token: req.params.token});
  });
});

router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          req.flash('error', 'Password reset token is invalid or has expired.');
          return res.redirect('back');
        }
        if (req.body.password.length < 5){
          req.flash('error', 'Password is too short (minimum is 5 characters)');
          return res.redirect('back');
        }
        if(req.body.password === req.body.confirm) {
            user.password =   
             bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
            user.save()
              .then(user => {
                passport.authenticate("local")(req, res, function(){
                res.redirect("/account"); 
              });
              })
              .catch(err => console.log(err));
          });
        });   
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

            user.save(function(err) {
                done(err, user);
            });
          }
         else {
            req.flash("error", "Passwords do not match.");
            return res.redirect('back');
        }
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'webdodiks@gmail.com',
          pass: process.env.PASSWORD
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'webdodiks@gmail.com',
        subject: 'Your password has been changed',
        text: 'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        done(err);
      });
    }
  ], function(err) {
    req.flash('success', 'Success! Your password has been changed.');
    res.redirect('/login');
  });
});

router.get('/account', middleware.isLoggedIn, (req, res) => {
  res.render('account');
});

module.exports = router;
