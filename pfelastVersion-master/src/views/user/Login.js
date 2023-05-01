import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { showSuccessMsg, showLoading, showErrorMsg } from '../helpers/message';
import { signin } from '../../api/auth'
import { useNavigate } from 'react-router-dom';
import { setAuthentication, isAuthenticated } from '../helpers/auth';
const Login = () => {

  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    // validate the form fields
    let errors = {};
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (password.trim() === '') {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }


    try {
      const res = await fetch('http://127.0.0.1:9090/user/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      });

      if (res.status === 400) {
        window.alert("Invalid Credentials")
      }
      else if (res.status === 404) {

        window.alert("Invalid Email")

      } else if (res.status === 201) {

        window.alert("Admin didn't activated your account yet!")

      } else if (res.status === 200) {
        window.alert("Login Successfull");
        const data = await res.json();
        console.log(data);

        // redirect based on user Role
        if (data.role === "Manager") {


        } else if (data.role === "Teacher") {


        }
        else if (data.role === "Student") {
          

        } else {
          // The Last Case Is Admin don't forget to create admin manually in your data base ;)

        }
      }
      else {
        window.alert("Login Failed!!");

      }

    } catch (error) {
      console.log(error);
    }
  }





  return (
    <div>
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-lg-5">
              <div className="card">
                {/* Logo */}
                <div className="card-header pt-4 pb-4 text-center bg-primary">
                  <a href="index.html">
                    <span><img src="assets/images/logo.png" alt height={18} /></span>
                  </a>
                </div>
                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center pb-0 fw-bold">Sign In</h4>

                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="emailaddress" className="form-label">Email address</label>
                      <input className="form-control" type="email" id="emailaddress" required placeholder="Enter your email" name="email" value={email} onChange={e => setEmail(e.target.value)} />

                    </div>
                    <div className="mb-3">
                      <Link to="/forgotpass" className="text-muted float-end"><small>Forgot your password?</small></Link>
                      <label htmlFor="password" className="form-label">Password</label>
                      <div className="input-group input-group-merge">
                        <input type="password" id="password" className="form-control" required placeholder="Enter your password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <div className="input-group-text" data-password="false">
                          <span className="password-eye" />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 mb-3">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="checkbox-signin" defaultChecked />
                        <label className="form-check-label" htmlFor="checkbox-signin">Remember me</label>
                      </div>
                    </div>
                    <div className="mb-3 mb-0 text-center">
                      <button className="btn btn-primary" type="submit"> Log In </button>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12 text-center">
                        <p className="text-muted">Don't have an account? <Link to="/register" className="text-muted ms-1"><b>Sign Up</b></Link></p>
                      </div> {/* end col */}

                    </div>
                  </form>
                </div> {/* end card-body */}
              </div>
              {/* end card */}

              {/* end row */}
            </div> {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
    </div>








  )
}

export default Login
