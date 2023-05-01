import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg } from '../helpers/message';
import { showSuccessMsg, showLoading } from '../helpers/message';
import { signup } from '../../api/auth'
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';
const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {

    event.preventDefault();
    // validate the form fields
    let errors = {};
    if (userName.trim() === '') {
      errors.name = 'name is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (password.trim() === '') {
      errors.password = 'Password is required';
    }
    if (role.trim() === '') {
      errors.role = 'Role is required';
    }


    // submit the form data
    // ...
    const response = fetch('http://127.0.0.1:9090/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, email, password, role })

    });

    // registration successful
    window.alert("SignUp Successfull");

  }
 
  
  return (
    <div>
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-lg-5">
              <div className="card">
                {/* Logo*/}
                <div className="card-header pt-4 pb-4 text-center bg-primary">
                  <a href="index.html">
                    <span><img src="assets/images/logo.png" alt height={18} /></span>
                  </a>
                </div>
                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center mt-0 fw-bold"> Sign Up</h4>
                    <p className="text-muted mb-4">Don't have an account? Create your account </p>
                  </div>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                      <label htmlFor="fullname" className="form-label">Full Name</label>
                      <input className="form-control" type="text" id="fullname" placeholder="Enter your name" required name="username" value={userName} onChange={e => setUserName(e.target.value)} />
                      {errors.username && <span>{errors.username}</span>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Role</label>
                      <select className="form-control" name="role" value={role} onChange={e => setRole(e.target.value)} required>
                        <option value=""></option>
                        <option value="Manager">Manager</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="emailaddress" className="form-label">Email address</label>
                      <input className="form-control" type="email" id="emailaddress" required placeholder="Enter your email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                      {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <div className="input-group input-group-merge">
                        <input type="password" id="password" className="form-control" placeholder="Enter your password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                        {errors.password && <span>{errors.password}</span>}
                        <div className="input-group-text" data-password="false">
                          <span className="password-eye" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-3 text-center">
                      <button className="btn btn-primary" type="submit"> Sign Up </button>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12 text-center">
                        <p className="text-muted">Already have account? <Link to="/login" className="text-muted ms-1"><b>Log In</b></Link></p>
                      </div> {/* end col*/}

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

export default Register
