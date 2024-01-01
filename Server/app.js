const express = require("express");
const { register } = require("./Controller/ports");
const { login } = require("./Controller/ports");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();

const port = 3001;



app.use(express.json())

app.use(cors())

app.post("/register", register)


app.post("/login", login)


app.use((err, req, res) => {
    console.log("Something Went Wrong2")
})

mongoose.connect("mongodb+srv://admin:kMcogUadxGW1HKme@cluster0.pr5l8do.mongodb.net/Data").then(
    app.listen(port, () => {
        console.log("Server is running")
    })





).catch(error => {
    console.log("Server Down" + error)
})


