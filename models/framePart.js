var mongoose = require("mongoose");

var FramePartSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    description: String,
    adhesive: String,
    fits: String,
    material: String,
    sizes: [String],
    thread: String 
});

module.exports = mongoose.model("FramePart", FramePartSchema);