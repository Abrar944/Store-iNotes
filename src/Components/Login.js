import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { unstable_HistoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

export const Login = () => {
          const history = useNavigate()
  const [credentials, setCredentials] = useState({ email: " ", password: " " });
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      history("../", { replace: true })
      
    }
    else{
      alert("Invalid Credentials")
    }
  };
  const handlechange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={credentials.email}
              name = "email"
              onChange={handlechange}
              placeholder = "Enter Your E-mail"

            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name = "password"
              value={credentials.password}
              onChange={handlechange}
              placeholder = "Enter Your Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
