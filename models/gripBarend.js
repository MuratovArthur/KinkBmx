var mongoose = require("mongoose");

var GripbarendSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    sizes: [String],
    description: String,
    size: String,
    material: String,
    mechanism: String,
    weight: String,
    length: String,
    diameter: String,
    barends: String   
});

module.exports = mongoose.model("Gripbarend", GripbarendSchema);