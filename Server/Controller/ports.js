const format = require("./zod");
const model = require("./mongooseModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const jwtPassword = "8t42nfq9";


async function register(req, res) { // function working properly

    //check user exists
    //check format
    //hash password
    //token generation
    //saveing into database
    //sending token and result

    const { username, email, password } = req.body;

    try {
        const userExists = await model.findOne({ email: email });

        if (userExists) {
            return res.status(400).json({ Message: "User Already Exists" })
        }

        const response = format.safeParse({ username, email, password });

        console.log(response)

        if (!response.success) {
            return res.status(400).json({ message: "Invalid format" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const token = jwt.sign({ username }, jwtPassword);

        const result = await model.create({ username, email, password: hashedPassword })

        res.status(200).json({ result, token })
    }

    catch (error) {
        res.status(500).json({
            message: "Server Error " + error
        })
    }

}

async function login(req, res) { //function working properly


    //checking user exist or not
    //verify password
    //Token Generation
    //Sending token

    const { username, email, password } = req.body;


    try {
        const userExists = await model.findOne({ email: email });

        if (!userExists) {
            return res.status(400).json({ Message: "User Not Exists" })
        }

        const verify = await bcrypt.compare(password, userExists.password)

        if (!verify) {
            return res.status(400).json({ Message: "Invalid Password" })
        }

        const token = jwt.sign({ username }, jwtPassword);

        res.status(200).json({ token })

    } catch (error) {
        res.status(500).json({
            message: "Server Error " + error
        })
    }

}


module.exports = { register, login }