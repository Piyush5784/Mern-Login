const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    username: String,
    email: String,
    password: String
})


const model = mongoose.model("users3", Schema);

module.exports = model;