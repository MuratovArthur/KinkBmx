var express = require("express"),
    router  = express.Router(),
    Blog    = require("../models/blog");

router.get("/", function(req,res) {
   Blog.find({}, function(err, allBlogs){
       if(err){
           console.log(err);
       } else { 
                res.render("blogs",{blogs: allBlogs});

            }
       })
});

module.exports = router;