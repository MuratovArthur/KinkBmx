var express = require("express");
var router  = express.Router();
var fs = require('fs');
var formidable = require('formidable');
const multer = require('multer');
const path = require('path');
var Return  = require("../models/return");
var Warranty  = require("../models/warranty");

var Storage= multer.diskStorage({
  destination:"./public/uploads/",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({
  storage:Storage
}).single('img');



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
    req.flash('error', 'Please enter all of first four fields with "*"');
    return res.redirect('/pages/returns#error');
  } else{
    Return.create(req.body.return, function(err, newReturn){
      if(err){
          console.log(err);
      }else{
         res.redirect("/");
         console.log(req.body.return);
      }
    });
  } 
});

router.get("/warranty", function(req,res) {
   res.render("warranty");
});

router.post("/warranty", upload,  function(req, res){
   const  { firstName, lastName, streetAdress, city, state, zip, country, email, phoneNumber, product, bikeShop, assembledBy, issue} = req.body.warranty;
   const  img  = req.file.filename;

   var newWarranry = { img: img, firstName: firstName, lastName: lastName, streetAdress: streetAdress, city: city, state: state, zip: zip, country: country, email: email, phoneNumber: phoneNumber, product: product, bikeShop: bikeShop, assembledBy: assembledBy, issue: issue };
   
  if ( !firstName || !lastName || !streetAdress || !city || !state || !zip || !country || !email || !phoneNumber || !product || !bikeShop || !assembledBy ) {
    req.flash('error', 'Please enter all of first four fields with "*"');
    return res.redirect('/pages/warranty#error');
  } else{
    Warranty.create(newWarranry, function(err, newReturn){
      if(err){
          console.log(err);
      }else{
         res.redirect("/");
         console.log(newWarranry);
      }
    });
  } 
});








module.exports = router;