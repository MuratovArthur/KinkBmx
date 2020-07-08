var mongoose = require("mongoose");

var MiscellaneousSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    description: String,
    adhesive: String,
    fits: String,
    material: String,
    thread: String
   


   
});

module.exports = mongoose.model("Miscellaneous", MiscellaneousSchema);