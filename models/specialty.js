var mongoose = require("mongoose");

var SpecialtySchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
	sizes: [String],
    season: Number,
    material: String,
    particulars: String
});

module.exports = mongoose.model("Specialty", SpecialtySchema);