var mongoose = require("mongoose");

var BeanySchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
    season: Number,
    colors: [String],
    material: String,
    particulars: String
});

module.exports = mongoose.model("Beany", BeanySchema);