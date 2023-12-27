import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import Login from "./Login";

function Register() {

  const [showPass, setShowPassword] = useState(false)

  function showHidePass(e) {
    e.preventDefault()
    setShowPassword(!showPass)
  }
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [msg, SetMsg] = useState("");

  async function onSubmitHandler(e) {

    e.preventDefault()
    const response = await axios.post('http://localhost:3001/register', { email, password })

    if (response.data === "Response Recorded") {
      console.log(response)
      navigate("/")
    }
    else {
      SetMsg("Network Error")
    }


  }

  return <>
    <p>{msg}</p>
    <form className="form">
      <h2 className="output"></h2>

      <button style={{ marginLeft: "25px" }} className="btn btn-primary">
        <Link style={{ color: "black" }} to={"/"}>Back</Link>
      </button>

      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label " htmlFor="typeEmailX">Email</label>
                      <input type="email" id="typeEmailX" onChange={(e) => setEmail(e.target.value)} className="form-control input-email form-control-lg" />

                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label " htmlFor="typePasswordX">Password</label>
                      <input type={showPass ? "text" : "password"} id="typePasswordX" onChange={(e) => setPassword(e.target.value)} className="form-control input-pass form-control-lg" />
                    </div>
                    <button className="btn btn-success " onClick={(e) => showHidePass(e)}>show password</button>

                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!"></a></p>

                    <button className="btn btn-outline-light btn-lg px-5 login" onClick={(e) => onSubmitHandler(e)} type="submit">
                      Register
                    </button>
                    {/* <button className="btn btn-success" onClick={(e) => onSubmitHandler(e)}>Send</button> */}

                  </div>




                  <div>
                    <p className="mb-0">Don't have an account?

                      <Link to={"/"}>Login</Link>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  </>
}

export default Register;