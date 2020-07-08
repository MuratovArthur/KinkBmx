var mongoose = require("mongoose");

var AccessorySchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
    season: Number,
    colors:[String],
    material: String,
    particulars: String
});

module.exports = mongoose.model("Accessory", AccessorySchema);