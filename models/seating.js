var mongoose = require("mongoose");

var SeatingSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    sizes: [String],
    description: String,
    material: String,
    length: String,
    size: String,
    weight: String,
    system: String,
    installation: String,
    fabric: String
});

module.exports = mongoose.model("Seating", SeatingSchema);