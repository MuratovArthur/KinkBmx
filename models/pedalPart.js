var mongoose = require("mongoose");

var PedalpartSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    sides: [String],
    description: String,
    includes: String,
    side: String,
    weight: String,
    installation: String
});

module.exports = mongoose.model("Pedalpart", PedalpartSchema);
