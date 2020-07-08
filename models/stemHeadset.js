var mongoose = require("mongoose");

var StemheadsetSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    description: String,
    material: String,
    weight: String,
    reach: String,
    rise: String,
    stackheight: String,
    bolts: String,
    capheight: String,
    spacersizes: String,
    bearingsizw: String,
    spacersizes: String,
});

module.exports = mongoose.model("Stemheadset", StemheadsetSchema);