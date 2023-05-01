import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { showSuccessMsg ,showErrorMsg} from '../helpers/message'
import axios from 'axios';
const Resetpass = () => {
    const [validUrl, setValidUrl] = useState(false);
	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const param = useParams();
	const url = `http://localhost:3000/user/password-reset/${param.id}/${param.token}`;

	useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(url, { password });
			setMsg(data.message);
			setError("");
			window.location = "/login";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};

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
              <h4 className="text-dark-50 text-center mt-0 fw-bold">Reset Password</h4>
              <p className="text-muted mb-4">Enter new password</p>
            </div>
            <form  onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="text" className="form-control" id="password" name="password" value={password} placeholder="Enter your new password" autofocus onChange={(e) => setPassword(e.target.value)} />
            </div>
              <div className="mb-0 text-center">
                <button className="btn btn-primary" type="submit">Reset </button>
              </div>
              {error && showErrorMsg(error)}
				   {msg && showSuccessMsg(msg)}
            </form>
          </div> {/* end card-body*/}
        </div>
        {/* end card */}
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="text-muted">Back to <Link to="/login" className="text-muted ms-1"><b>Log In</b></Link></p>
          </div> {/* end col */}
        </div>
 
      </div> 
    </div>
   
  </div>
  
</div>
         
         
      
     
    </div>

  
  )
}

export default Resetpass
