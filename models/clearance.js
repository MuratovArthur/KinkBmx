var mongoose = require("mongoose");

var ClearanceSchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
	size: String,
	colors: [String],
    description: String,
    length: String,
    diametr: String,
    material: String,
    system: String,
    weight: String,
    barends: String,
    capheight: String,
    spacersizes: String,
    bearingsize: String
});

module.exports = mongoose.model("Clearance", ClearanceSchema);