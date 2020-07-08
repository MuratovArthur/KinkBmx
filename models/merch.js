var mongoose = require("mongoose");

var MerchSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    description: String,
    material: String,
});

module.exports = mongoose.model("Merch", MerchSchema);