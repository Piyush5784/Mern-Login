const mongoose = require("mongoose");

const model = new mongoose.Schema({
    email:String,
    password:String
})

const UserModel = mongoose.model("User",model)

module.exports = UserModel;