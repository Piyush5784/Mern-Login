const express = require("express");
const app = express();
const zod = require('zod')
const cors = require("cors")
const port = 3001;
const UserModel = require("./userModel")

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://user:passwordcluster0.pr5l8do.mongodb.net/Data", {
    serverSelectionTimeoutMS: 25000,
})

// const User = mongoose.model("User",{
//     email:String,
//     password:String
// })

app.use(express.json())

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
})

// async
async function RecordResponse(response) {
    const user = new UserModel({
        email: response.data.email,
        password: response.data.password
    })
    await user.save()
}

async function findMail(request) {
    const email = request.body.email;
    const password = request.body.password;

    const userFound = false;

    try {
        const getuser = await UserModel.findOne({ email, password }, { timeout: false })

        if (getuser) {
            userFound = true;
        }

    } catch (error) {
        console.log("Something Wrong Happens")
    }
    return userFound;
}
app.use(cors())
app.post("/register", (req, res) => {
    const response = schema.safeParse(req.body)
    // console.log(req.body)
    // console.log(response.success)

    try {
        if (response.success) {
            RecordResponse(response)
            res.send("Response Recorded")
        }
        else {
            res.send("Invalid User Email Or Password")
        }
    }
    catch {
        console.log(error)
        res.status(400).json({
            msg: "Internal Server Error"
        })
    }


})

app.post("/users", (req, res) => {
    const verify = findMail(req)
    if (verify) {
        res.send("User Found")

    }
    else {
        res.send("User Not Found")
    }

})

app.use(function (err, req, res, next) {
    res.send("Something Wrong Happens")
})

app.listen(port, () => {
    console.log("Server Started");
});
