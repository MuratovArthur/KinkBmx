var express = require("express");
var router  = express.Router();
var fs = require('fs');
var formidable = require('formidable');
const multer = require('multer');
const path = require('path');



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

router.get("/warranty", function(req,res) {
   res.render("warranty");
});



// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './routes/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 10000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('img');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}


router.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('warranty', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('warranty', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('warranty', {
          msg: 'File Uploaded!',
          file: `${__dirname}/uploads/${req.file.filename}`
        });
      }
    }
  });
});


module.exports = router;