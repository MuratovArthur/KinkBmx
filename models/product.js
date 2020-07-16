var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
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
    age: String,
    yearsRiding: String,
    product: String,
    modelYear: String,
    color: String,
    size: String,
    serialNumber: String,
    bikeShop: String,
    purchaseDate: String,
    assembledBy: String,
    details: String
});

module.exports = mongoose.model("Product", ProductSchema);