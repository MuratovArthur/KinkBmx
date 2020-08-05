var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  }, 
  avatar: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);