var mongoose = require("mongoose");

var GiftcardSchema = new mongoose.Schema({
	name: String,
	images: [String],
    costs: [Number],
    description: String
});

module.exports = mongoose.model("Giftcard",GiftcardSchema);