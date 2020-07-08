var mongoose = require("mongoose");

var BrakeSchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
    description: String,
    material: String,
    particulars: String
});

module.exports = mongoose.model("Brake", BrakeSchema);