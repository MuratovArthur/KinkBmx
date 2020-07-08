var mongoose = require("mongoose");

var ForkSchema = new mongoose.Schema({
	name: String,
	cost: Number,
	images: [String],
    sizes: [String],
	colors: [String],
    offsets: [String],
    description: String,
    forkheight: String,
    steerertubelength: String,
    dropoutoffset: String,
    dropoutslot: String,
    dropoutthickness: String,
    bearingrace: String,
    compressionboltthread: String,
    compressionbolthex: String,
    tubingmaterial: String,
    forkleg: String,
    forklegends: String,
    heattreatment: String,
    particulars: String,
    material: String,
    threadtype: String,
    tooltype: String,
    weight: String
});

module.exports = mongoose.model("Fork", ForkSchema);