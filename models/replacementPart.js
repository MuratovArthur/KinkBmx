var mongoose = require("mongoose");

var ReplacementPartSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    sizes: [String],
    description: String,
    valve: String,
    material: String,
    bearingtype: String,
    bearingtsize: String,
    compatibility: String,
    includes: String,
    length: String,
    size: String,
    thread: String,
    spline: String,
    weight: String,
    type: String,
    driverside: String
});

module.exports = mongoose.model("ReplacementPart", ReplacementPartSchema);