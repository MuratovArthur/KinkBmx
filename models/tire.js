var mongoose = require("mongoose");

var TireSchema = new mongoose.Schema({
   name: String,
   cost: Number,
   images: [String],
   colors: [String],
   sizes: [String],
   size: String,
   psi: String,
   description: String,
   bead: String,
   pressure: String,
   weight: String,
   casing: String,
   valve: String
});

module.exports = mongoose.model("Tire", TireSchema);