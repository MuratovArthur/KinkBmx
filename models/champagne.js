var mongoose = require("mongoose");

var ChampagneSchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
	size: String,
    description: String,
    material: String,
    weight: String,
    particulars: String
});

module.exports = mongoose.model("Champagne", ChampagneSchema);