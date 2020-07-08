var mongoose = require("mongoose");

var PeghubguardSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    sizes: [String],
    description: String,
    material: String,
    length: String,
    size: String,
    diameter: String,
    size: String,
    fits: String,
    weight: String,
});

module.exports = mongoose.model("Peghubguard", PeghubguardSchema);
