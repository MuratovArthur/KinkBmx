var mongoose = require("mongoose");

var SprocketSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    sizes: [String],
    description: String,
    material: String,
    compatibility: String,
    includes: String,
    size: String,
    weight: String,
    thickness: String,
    particulars: String
});

module.exports = mongoose.model("Sprocket", SprocketSchema);