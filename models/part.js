var mongoose = require("mongoose");

var PartSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    images: [String],
    colors: [String],
    sizes: [String],
    offsets: [String],
    bottombrackets: [String],
    description: String,
    forkheight: String,
    steerertubelength: String,
    dropoutoffset: String,
    dropoutslot: String,
    bearingrace: String,
    forkleg: String,
    forklegends: String,
    weight: String,
    rise: String,
    width: String,
    backsweep: String,
    tubing: String,
    bolts: String,
    length: String,
    driveside: String,
    particulars: String,
    material: String,
    thickness: String,
    compatibility: String,
    diameter: String,
    size: String,
    bead: String,
    pressure: String
});

module.exports = mongoose.model("Part", PartSchema);