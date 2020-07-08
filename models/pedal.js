
var mongoose = require("mongoose");

var PedalSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    description: String,
    spindlesize: String,
    spindlematerial: String,
    bodymaterial: String,
    weight: String,
    installation: String
});

module.exports = mongoose.model("Pedal", PedalSchema);