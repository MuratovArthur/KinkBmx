var mongoose = require("mongoose");

var StickerSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    description: String, 
});

module.exports = mongoose.model("Sticker", StickerSchema);