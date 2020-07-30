var express = require("express");
var router  = express.Router();
var fs = require('fs');
var formidable = require('formidable');
var multer = require('multer');
var path = require('path');
var Return  = require("../models/return");
var Warranty  = require("../models/warranty");
var Contact  = require("../models/contact");
var Product  = require("../models/product");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({ storage: storage }).fields([{ name: 'purchasePhoto', maxCount: 1 }, { name: 'deffectPhoto', maxCount: 5 }]);
  



router.get("/dealer-locator", function(req,res) {
   res.render("dealers");
});

router.get("/team", function(req,res) {
   res.render("team");
});

router.get("/ss20", function(req,res) {
   res.render("ss20");
});

router.get("/catalogs", function(req,res) {
   res.render("catalogs");
});

router.get("/faqs", function(req,res) {
   res.render("faqs");
});

router.get("/web-store-policy", function(req,res) {
   res.render("web-store-policy");
});

router.get("/manuals-guides", function(req,res) {
   res.render("manuals-guides");
});


router.get("/media-info", function(req,res) {
   res.render("mediaInfo");
});

router.get("/dealer-locator", function(req,res) {
   res.render("dealer-locator");
});


router.get("/download", (req, res) => {
    function zipping(){
        var zip = require('node-zip')();
       

        var zipName = "Kink-BMX-Logo-Kit-1.zip";
        var someDir = fs.readdirSync(__dirname+"/Kink-BMX-Logo-Kit-1");
        var newZipFolder = zip.folder('Kink-BMX-Logo-Kit-1');


        for(var i = 0; i < someDir.length; i++){
        newZipFolder.file(someDir[i], fs.readFileSync(__dirname+"/Kink-BMX-Logo-Kit-1/"+someDir[i]),{base64:true});
        }

        var data = zip.generate({base64:false,compression:'DEFLATE'});

        fs.writeFile(__dirname +"/"+ zipName, data, 'binary', function(err){
        if(err){
        console.log(err);
        }

        res.download(`${__dirname}/Kink-BMX-Logo-Kit-1.zip`, function(){
            fs.unlinkSync(`${__dirname}/Kink-BMX-Logo-Kit-1.zip`)
        });
        });
        }
    
	zipping();

});

router.get("/returns", function(req,res) {
   res.render("returns");
});

router.post("/returns", function(req, res){
   const  { order, firstName, secondName, streetAdress, city, state, zip, country, email, phoneNumber, item} = req.body.return;
  if ( !order || !firstName || !secondName || !streetAdress || !city || !state || !zip || !country || !email || !phoneNumber || !item) {
    req.flash('error', 'Please enter all of the fields with "*"');
    return res.redirect('/pages/returns#flash');
  } else{
    Return.create(req.body.return, function(err, newReturn){
      if(err){
          console.log(err);
      }else{
        req.flash('success', 'Thank you! The form was submitted successfully.');
        return res.redirect('/pages/returns#flash');
      }
    });
  } 
});

router.get("/warranty", function(req,res) {
   res.render("warranty");
});


router.post("/warranty", function(req, res, next){

upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
      req.flash('error', 'Please upload no more than 6 files in total');
      return res.redirect('/pages/warranty#flash');
    } else if (err) {
      console.log(err);
    } else {

console.log(req.files);
console.log(req.body);

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var streetAdress = req.body.streetAdress;
    var city = req.body.city;
    var state = req.body.state;
    var zip = req.body.zip;
    var country = req.body.country;
    var phoneNumber = req.body.phoneNumber;
    var product = req.body.product;
    var bikeShop = req.body.bikeShop;
    var assembledBy = req.body.assembledBy;
    var issue = req.body.issue;
    var email = req.body.email;

        if (req.files === undefined){
          var purchasePhoto = "";
          var deffectPhoto1 = '';
          var deffectPhoto2 = '';
          var deffectPhoto3 = '';
          var deffectPhoto4 = '';
          var deffectPhoto5 = '';
        } else {

          if (req.files.purchasePhoto === undefined) {
            var purchasePhoto = "";
          } else {
            if (req.files.purchasePhoto[0] === undefined) {
              var purchasePhoto = "";
            } else {
               var purchasePhoto = req.files.purchasePhoto[0].filename;
            }
          }

          

          if (req.files.deffectPhoto === undefined) {
            var deffectPhoto1 = "";
            var deffectPhoto2 = "";
          } else {
            if (req.files.deffectPhoto[0] === undefined) {
              var deffectPhoto1 = "";
            } else {
               var deffectPhoto1 = req.files.deffectPhoto[0].filename;
            }
            if (req.files.deffectPhoto[1] === undefined) {
               var deffectPhoto2 = "";
            } else {
                var deffectPhoto2 = req.files.deffectPhoto[1].filename;
            }
            if (req.files.deffectPhoto[2] === undefined) {
               var deffectPhoto3 = "";
            } else {
                var deffectPhoto3 = req.files.deffectPhoto[2].filename;
            }
            if (req.files.deffectPhoto[3] === undefined) {
               var deffectPhoto4 = "";
            } else {
                var deffectPhoto4 = req.files.deffectPhoto[3].filename;
            }
            if (req.files.deffectPhoto[4] === undefined) {
               var deffectPhoto5 = "";
            } else {
                var deffectPhoto5 = req.files.deffectPhoto[4].filename;
            }
          }

        }

      var newWarranry = { purchasePhoto: purchasePhoto, deffectPhoto1: deffectPhoto1, deffectPhoto2: deffectPhoto2, deffectPhoto3: deffectPhoto3, deffectPhoto4: deffectPhoto4, deffectPhoto5: deffectPhoto5, firstName: firstName, lastName: lastName, streetAdress: streetAdress, city: city, state: state, zip: zip, country: country, email: email, phoneNumber: phoneNumber, product: product, bikeShop: bikeShop, assembledBy: assembledBy, issue: issue};

        Warranty.create(newWarranry, function(err, newWarranry){
        if(err){
          console.log(err);
        } else{
         console.log(newWarranry);
         req.flash('success', 'Thank you! The form was submitted successfully.');
         return res.redirect('/pages/warranty#flash');
      }
    });   
}});

});

router.get("/product-registration", function(req,res) {
   res.render("product-registration");
});

router.post("/product-registration", function(req, res){
  const  {firstName, lastName, streetAdress, city, state, zip, country, email, product, color, bikeShop} = req.body.product;
  if ( !firstName || !lastName || !streetAdress || !city || !state || !zip || !country || !email || !product || !color || !bikeShop) {
    req.flash('error', 'Please enter all of the fields with "*"');
    return res.redirect('/pages/product-registration#flash');
  }  else{
    Product.create(req.body.product, function(err, newProduct){
      if(err){
          console.log(err);
      }else{
        console.log(req.body.product);
        req.flash('success', "Thank you! The form was submitted successfully.");
        return res.redirect('/pages/product-registration#flash');
      }
    });
  } 
});

router.get("/contact", function(req,res) {
   res.render("contact");
});


router.post("/contact", function(req, res){
   const  { name, email, subject, message} = req.body.contact;
  if ( !name || !email || !subject || !message) {
    req.flash('error', 'Please enter all fieds');
    return res.redirect('/pages/contact');
  } else{
    Contact.create(req.body.contact, function(err, newContact){
      if(err){
          console.log(err);
      }else{
        console.log(req.body.contact);
        req.flash('success', "Thanks for contacting us. We'll get back to you as soon as possible.");
        return res.redirect('/pages/contact');
      }
    });
  } 
});







module.exports = router;