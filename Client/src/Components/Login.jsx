import "../Components/LR.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import AlertDanger from "./AlertDanger";

function Login() {

    const navigate = useNavigate()

    let [showDanger, setShowdanger] = useState(false)

    let [password, setPassword] = useState();

    let [email, setEmail] = useState();

    async function SubmitHandler() {

        try {

            let response = await axios.post("http://localhost:3002/login", { email, password })

            console.log(response)

            if (!(response.data == null)) {
                navigate("/home")
            }
            else {
                setShowdanger(true)
            }
            localStorage.setItem("authToken", response.data.token)

        } catch (error) {
            console.log("Server Error " + error)
            setShowdanger(true)
        }
    }

    let [type, SetType] = useState(false)


    function ShowPasswordHandler() {
        SetType(!type)
    }


    return <>
        {showDanger && <AlertDanger message={"Invalid Username or Password"} />}

        <div className="container">
            <div className="left">
                <div className="header">
                    <h2 className="animation a1">Login</h2>
                    <h4 className="animation a2">Log in to your account using email and password</h4>
                    <h4> All the fields are required for login</h4>
                </div>
                <div className="form">
                    <input type="email" onChange={(e) => { setEmail(e.target.value), setShowdanger(false) }} className="form-field animation a3" required placeholder="Email Address" />
                    <input type={type ? "text" : "password"} onChange={(e) => { setPassword(e.target.value), setShowdanger(false) }} required className="form-field animation a4" placeholder="Password" />

                    <button onClick={() => ShowPasswordHandler()}>Show Password</button>

                    <p className="animation a5"><a href="#">Forgot Password</a></p>
                    <button className="animation a6" onClick={() => SubmitHandler()}>LOGIN</button>
                    <h4 className="text">Don't have an Account?
                        <Link to={"/register"} style={{ color: "blue" }}> Register</Link>
                    </h4>
                </div>
            </div>
            <div className="right"></div>
        </div>

    </>
}

export default Login;