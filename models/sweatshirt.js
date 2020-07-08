var mongoose = require("mongoose");

var SweatshirtSchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
	sizes: [String],
    season: Number,
    material: String,
    particulars: String
});

module.exports = mongoose.model("Sweatshirt", SweatshirtSchema);