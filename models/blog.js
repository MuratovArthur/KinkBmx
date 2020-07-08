var mongoose = require("mongoose");

var BlogSchema = new mongoose.Schema({
    title: String,
    tegs: [String],
    body: String,
    images: [String],
    video:  String,
    created:  {type: Date, default: Date.now}
});

module.exports = mongoose.model("Blog", BlogSchema);