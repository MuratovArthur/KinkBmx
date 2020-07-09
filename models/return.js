var mongoose = require("mongoose");

var ReturnSchema = new mongoose.Schema({
    date: String,
    order: String,
    firstName: String,
    lasttName: String,
    streetAdress: String,
    streetAdressLine: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    email: String,
    phoneNumber: Number,
    item: String,
    reason: String,
    comment: String
});

module.exports = mongoose.model("Return", ReturnSchema);