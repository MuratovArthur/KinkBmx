var express = require("express"),
    router  = express.Router(),
    Accessory       = require("../models/accessory"),
    Apparel         = require("../models/apparel"),
    Bag             = require("../models/bag"),
    Bar             = require("../models/bar"),
    Beany           = require("../models/beany"),
    Bike            = require("../models/bike"),
    Bottom          = require("../models/bottom"),
    Brake           = require("../models/brake"),
    Champagne       = require("../models/champagne"),
    Clearance       = require("../models/clearance"),
    Crank           = require("../models/crank"),
    Fork            = require("../models/fork"),
    Framepart       = require("../models/framePart"),
    Frame           = require("../models/frame"),
    Giftcard        = require("../models/giftcard"),
    Gripbarend      = require("../models/gripBarend"),
    Hat             = require("../models/hat"),
    Hubpart         = require("../models/hubPart"),
    Jacket          = require("../models/jacket"),
    Merch           = require("../models/merch"),
    Miscellaneous   = require("../models/miscellaneous"),
    Mysterybox      = require("../models/mysteryBox"),
    Part            = require("../models/part"),
    Pedalpart       = require("../models/pedalPart"),
    Pedal           = require("../models/pedal"),
    Peghubguard     = require("../models/pegHubguard"),
    Replacementpart = require("../models/replacementPart"),
    Seating         = require("../models/seating"),
    Specialty       = require("../models/specialty"),
    Sprocket        = require("../models/sprocket"),
    Stemheadset     = require("../models/stemHeadset"),
    Sticker         = require("../models/sticker"),
    Sweatshirt      = require("../models/sweatshirt"),
    Tshirt          = require("../models/tShirt"),
    Tire            = require("../models/tire"),
    User            = require("../models/user");


router.get("/bikes/new", function(req, res){
    res.render("bikeNew");
});
router.post("/bikes", function(req, res){
   Bike.create(req.body.bike, function(err, newBike){
      if(err){
          console.log(err);
      }else{
         res.redirect("/collections/bikes");
      }
    });
});


router.get("/", function(req,res) {
   res.render("collections");
});

router.get("/accessories", function(req,res) {
   Accessory.find({}, function(err, allAccessories){
       if(err){
           console.log(err);
       } else { 
                res.render("accessories",{accessories: allAccessories});

            }
       })
});

router.get("/apparel", function(req,res) {
   Apparel.find({}, function(err, allApparels){
       if(err){
           console.log(err);
       } else { 
                res.render("apparel",{apparel: allApparels});

            }
       })
});

router.get("/bags", function(req,res) {
   Bag.find({}, function(err, allBags){
       if(err){
           console.log(err);
       } else { 
                res.render("bags",{bags: allBags});

            }
       })
});

router.get("/bars", function(req,res) {
    Bar.find({}, function(err, allBars){
       if(err){
           console.log(err);
       } else { 
                res.render("bars",{bars: allBars});

            }
       })
});

router.get("/beanies", function(req,res) {
   Beany.find({}, function(err, allBeanies){
       if(err){
           console.log(err);
       } else { 
                res.render("beanies",{beanies: allBeanies});

            }
       })
});


router.get("/bikes", function(req,res) {
   Bike.find({}, function(err, allBikes){
       if(err){
           console.log(err);
       } else { 
                res.render("bikes",{bikes: allBikes});

            }
       })
});

router.get("/bottoms", function(req,res) {
   Bottom.find({}, function(err, allBottoms){
       if(err){
           console.log(err);
       } else { 
                res.render("bottoms",{bottoms: allBottoms});

            }
       })
});

router.get("/brakes", function(req,res) {
   Brake.find({}, function(err, allBrakes){
       if(err){
           console.log(err);
       } else { 
                res.render("brakes",{brakes: allBrakes});

            }
       })
});

router.get("/champagne", function(req,res) {
   Champagne.find({}, function(err, allChampagnes){
       if(err){
           console.log(err);
       } else { 
                res.render("champagne",{champagne: allChampagnes});

            }
       })
});

router.get("/clearance", function(req,res) {
   Clearance.find({}, function(err, allClearances){
       if(err){
           console.log(err);
       } else { 
                res.render("clearance",{clearance: allClearances});

            }
       })
});

router.get("/bottom-bracket-parts", function(req,res) {
   Crank.find({}, function(err, allCranks){
       if(err){
           console.log(err);
       } else { 
                res.render("cranksandBB",{cranksandBB: allCranks});

            }
       })
});

router.get("/forks", function(req,res) {
   Fork.find({}, function(err, allForks){
       if(err){
           console.log(err);
       } else { 
                res.render("forks",{forks: allForks});

            }
       })

});

router.get("/frame-parts", function(req,res) {
   Framepart.find({}, function(err, allFramepart){
       if(err){
           console.log(err);
       } else { 
                res.render("frameparts",{frameparts: allFramepart});

            }
       })
});

router.get("/frames", function(req,res) {
   Frame.find({}, function(err, allFrames){
       if(err){
           console.log(err);
       } else { 
                res.render("frames",{frames: allFrames});

            }
       })
});

router.get("/gift-certificates", function(req,res) {
   Giftcard.find({}, function(err, allGiftcards){
       if(err){
           console.log(err);
       } else { 
                res.render("giftcards",{giftcards: allGiftcards});

            }
       })
});

router.get("/grips", function(req,res) {
   Gripbarend.find({}, function(err, allGripbarends){
       if(err){
           console.log(err);
       } else { 
                res.render("gripsandbarends",{gripsandbarends: allGripbarends});

            }
       })
});

router.get("/hats", function(req,res) {
   Hat.find({}, function(err, allHats){
       if(err){
           console.log(err);
       } else { 
                res.render("hats",{hats: allHats});

            }
       })
});

router.get("/hub-parts", function(req,res) {
   Hubpart.find({}, function(err, allHubparts){
       if(err){
           console.log(err);
       } else { 
                res.render("hubparts",{hubparts: allHubparts});

            }
       })
});

router.get("/jackets", function(req,res) {
   Jacket.find({}, function(err, allJackets){
       if(err){
           console.log(err);
       } else { 
                res.render("jackets",{jackets: allJackets});

            }
       })
});

router.get("/merch", function(req,res) {
    Merch.find({}, function(err, allMerch){
       if(err){
           console.log(err);
       } else { 
                res.render("merch",{merch: allMerch});

            }
       })
});

router.get("/miscellaneous", function(req,res) {
   Miscellaneous.find({}, function(err, allMiscellaneous){
       if(err){
           console.log(err);
       } else { 
                res.render("miscellaneous",{miscellaneous: allMiscellaneous});

            }
       })
});

router.get("/mystery-box", function(req,res) {
   Mysterybox.find({}, function(err, allMysteryboxes){
       if(err){
           console.log(err);
       } else { 
                res.render("mysterybox",{mysterybox: allMysteryboxes});

            }
       })
});

router.get("/parts", function(req,res) {
   Pedalpart.find({}, function(err, allParts){
       if(err){
           console.log(err);
       } else { 
                res.render("parts",{parts: allParts});

            }
       })
});


router.get("/pedal-parts", function(req,res) {
   Pedalpart.find({}, function(err, allPedalparts){
       if(err){
           console.log(err);
       } else { 
                res.render("pedalparts",{pedalparts: allPedalparts});

            }
       })
});

router.get("/pegs", function(req,res) {
    Peghubguard.find({}, function(err, allPeghubguards){
       if(err){
           console.log(err);
       } else { 
                res.render("pegsandhubguards",{pegsandhubguards: allPeghubguards});

            }
       })
});

router.get("/replacement-parts", function(req,res) {
   Replacementpart.find({}, function(err, allReplacementparts){
       if(err){
           console.log(err);
       } else { 
                res.render("replacementparts",{replacementparts: allReplacementparts});

            }
       })
});

router.get("/pedals", function(req,res) {
   Pedal.find({}, function(err, allPedals){
       if(err){
           console.log(err);
       } else { 
                res.render("pedals",{pedals: allPedals});

            }
       })
});

router.get("/seats", function(req,res) {
   Seating.find({}, function(err, allSeating){
       if(err){
           console.log(err);
       } else { 
                res.render("seating",{seating: allSeating});

            }
       })
});

router.get("/specialty", function(req,res) {
   Specialty.find({}, function(err, allSpecialty){
       if(err){
           console.log(err);
       } else { 
                res.render("specialty",{specialty: allSpecialty});

            }
       })
});

router.get("/sprockets", function(req,res) {
  Sprocket.find({}, function(err, allSprockets){
       if(err){
           console.log(err);
       } else { 
                res.render("sprockets",{sprockets: allSprockets});

            }
       })
});

router.get("/stems", function(req,res) {
   Stemheadset.find({}, function(err, allStemheadsets){
       if(err){
           console.log(err);
       } else { 
                res.render("stemsandheadsets",{stemsandheadsets: allStemheadsets});

            }
       })
});

router.get("/stickers", function(req,res) {
   Sticker.find({}, function(err, allStickers){
       if(err){
           console.log(err);
       } else { 
                res.render("stickers",{stickers: allStickers});

            }
       })
});

router.get("/sweatshirts", function(req,res) {
   Sweatshirt.find({}, function(err, allSweatshirts){
       if(err){
           console.log(err);
       } else { 
                res.render("sweatshirts",{sweatshirts: allSweatshirts});

            }
       })
});

router.get("/tires", function(req,res) {
   Tire.find({}, function(err, allTires){
       if(err){
           console.log(err);
       } else { 
                res.render("tires",{tshirts: allTires});

            }
       })
});

router.get("/t-shirts", function(req,res) {
   Tshirt.find({}, function(err, allTshirts){
       if(err){
           console.log(err);
       } else { 
                res.render("tshirts",{tshirts: allTshirts});

            }
       })
});


module.exports = router;