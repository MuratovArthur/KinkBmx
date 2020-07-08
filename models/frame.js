var mongoose = require("mongoose");

var FrameSchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
	colors: [String],
    sizes: [Number],
    description: String,
    features:[String],
    toptubesizes: Number,
    chainstaylength: String,
    bottombracketheight: Number,
    standoverheight: Number,
    headtubeangle: Number,
    seattubeangle: Number,
    material: String,
    headtube: String,
    dropouts: String,
    bottombracket: String,
    braking: String,
    particulars: String,
    weight: String   
});

module.exports = mongoose.model("Frame", FrameSchema);