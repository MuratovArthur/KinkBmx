var mongoose = require("mongoose");

var BarSchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
    sizes: [String],
    colors:[String],
    rise: String,
    width: String,
    backsweep: String,
    upsweep: String,
    tubing: String,
    heatTreatment: String,
    weight: String
});

module.exports = mongoose.model("Bar", BarSchema);