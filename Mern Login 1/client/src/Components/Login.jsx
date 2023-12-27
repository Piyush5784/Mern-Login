import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const [msg, setMsg] = useState("");

  async function onSubmitHandler(e) {
    e.preventDefault()
    const response = await axios.post("http://localhost:3001/users", { email, password })

    if (response.data = "User Found") {
      setMsg('Logged In')
      navigate("/home")
    }
    else {
      setMsg("User Not Found")
    }
  }
  const [showPass, setShowPassword] = useState(false)

  function showHidePass(e) {
    e.preventDefault()
    setShowPassword(!showPass)
  }
  return <>
    <p>{msg}</p>
    <form className="form">
      <h2 className="output"></h2>

      {/* <a className="btn btn-primary btn-outline-light" style={{margin: "20px"}} href="index.html" role="button">Back</a>  */}

      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <div className="form-outline form-white mb-4">

                      <label className="form-label " for="typeEmailX">Email</label>
                      <input type="email" onChange={(e) => setEmail(e.target.value)} id="typeEmailX" className="form-control input-email form-control-lg" />


                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label " for="typePasswordX">Password</label>
                      <input onChange={(e) => setPassword(e.target.value)} type={showPass ? "text" : "password"} id="typePasswordX" className="form-control input input-pass form-control-lg" ></input>
                      <button className="btn btn-success " onClick={(e) => showHidePass(e)}>show password</button>

                    </div>

                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                    <button onClick={(e) => onSubmitHandler(e)} className="btn btn-outline-light btn-lg px-5 login" type="submit">


                      Login

                    </button>



                  </div>

                  <div>
                    <p className="mb-0">Don't have an account?

                      <Link to={"/register"}>Register</Link>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form >
  </>
}

export default Login;