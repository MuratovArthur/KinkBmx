var mongoose = require("mongoose");

var MysteryboxSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    image: String,
    level: String,
    sizes: [String],
    description: String
});

module.exports = mongoose.model("Mysterybox", MysteryboxSchema);