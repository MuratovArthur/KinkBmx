var mongoose = require("mongoose");

var HatSchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
    season: Number,
    colors: [String]
});

module.exports = mongoose.model("Hat", HatSchema);