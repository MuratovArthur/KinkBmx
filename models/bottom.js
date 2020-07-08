var mongoose = require("mongoose");

var BottomSchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
	sizes: [String],
    season: Number,
    colors: [String],
    material: String,
    particulars: String
});

module.exports = mongoose.model("Bottom", BottomSchema);