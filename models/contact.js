var mongoose = require("mongoose");

var ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

module.exports = mongoose.model("Contact", ContactSchema);