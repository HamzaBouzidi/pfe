import React from 'react'
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState(false);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:3000/user/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

  return (
    <div>
      {validUrl ? (
				<div className>
					
					<h1>Email verified successfully</h1>
					<Link to="/login">
						<button >Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
    </div>
  )
}

export default EmailVerify
