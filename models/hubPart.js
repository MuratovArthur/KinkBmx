var mongoose = require("mongoose");

var HubPartSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    sizes: [String],
    description: String,
});

module.exports = mongoose.model("HubPart", HubPartSchema);