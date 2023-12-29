import axios from "axios";
import "../Components/LR.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AlertSuccess from "./AlertSuccess";
import AlertDanger from "./AlertDanger";

function Register() {

    const navigate = useNavigate();

    let [username, setUsername] = useState();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();

    let [type, SetType] = useState(false)
    let [message, setMessage] = useState("");


    function ShowPasswordHandler() {
        SetType(!type)
    }

    let [show, setShow] = useState(false);

    let [showDanger, setShowdanger] = useState(false)


    async function SubmitHandler() {
        let obj = { username, email, password }

        try {
            let response = await axios.post("http://localhost:3002/register", obj)

            console.log(response)

            if (response.result !== null) {
                setShow(true);
                navigate("/")
            }
            else {
                setMessage("Invalid username or password")
                setShowdanger(true);
            }
            localStorage.setItem("token", response.data.token)
        }
        catch (error) {
            console.log("Something Wrong Happens " + error)
            setMessage("User Already Exists");
            setShowdanger(true)
        }
    }
    return <>

        {show && <AlertSuccess />}
        {showDanger && <AlertDanger message={message} />}
        <div className="container">

            <div className="left">
                <div className="header">
                    <h2 className="animation a1">Registration</h2>
                    <h4 className="animation a2">Log in to your account using email and password</h4>
                    <h4> All the fields are required for registration</h4>
                </div>
                <div className="form">
                    <input type="email" onChange={(e) => { setUsername(e.target.value), setShowdanger(false) }} className="form-field animation a3" required placeholder="Name" />

                    <input type="email" onChange={(e) => { setEmail(e.target.value), setShowdanger(false) }} className="form-field animation a3" required placeholder="Email Address" />


                    <input type={type ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} className="form-field animation a4" required placeholder="Password" />

                    <button onClick={() => ShowPasswordHandler()}>Show Password</button>


                    <p className="animation a5"><a href="#">Forgot Password</a></p>
                    <button className="animation a6" onClick={() => SubmitHandler()}>Register</button>
                    <h4 className="text">Already have an Account?
                        <Link to={"/"} style={{ color: "blue" }}> Login</Link>
                    </h4>
                </div>
            </div>
            <div className="right"></div>
        </div>

    </>
}

export default Register;