var mongoose = require("mongoose");

var CrankSchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
	size: String,
	colors: [String]  ,
    bottombrackets: [String],
    description: String,
    length: String,
    spindlesize: String,
    spindletype: String,
    driveside: String,
    drivetype: String,
    bolts: String,
    tubing: String,
    heattreatment: String,
    particulars: String,
    weight: String,
    sizes: [String],
    type: String,
    material: String,
    bearings: String,
    thread: String,
});

module.exports = mongoose.model("Crank", CrankSchema);