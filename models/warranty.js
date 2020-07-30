var mongoose = require("mongoose");

var WarrantySchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    streetAdress: String,
    streetAdressLine: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    email: String,
    phoneNumber: String,
    product: String,
    color: String,
    size: String,
    serialNumber: String,
    bikeShop: String,
    modelYear: String,
    purchaseDate: String,
    assembledBy: String,
    issue: String,
    purchasePhoto: String,
    deffectPhoto1: String,
    deffectPhoto2: String,
    deffectPhoto3: String,
    deffectPhoto4: String,
    deffectPhoto5: String
});

module.exports = mongoose.model("Warranty", WarrantySchema);