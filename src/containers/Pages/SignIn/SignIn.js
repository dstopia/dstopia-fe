import React, { useState } from "react";
import "./SignIn.css";

export default function SignIn() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="container bg-light ">
      <div className="row vh-100 min-h align-items-center">
        <div className="col">
          <form className="w-75 p-4 mx-auto shadow rounded">
            <h3 className="mb-5 text-center">Login to Dstopia!</h3>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-normal">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="password" className="form-label fw-normal">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <a href="" className=" d-block mb-4 text-end small">
              Forgot password?
            </a>
            <button
              type="submit"
              className="btn btn-outline-primary btn-block"
              onClick={handleSubmit}
            >
              Login
            </button>
            <p className="line my-3">or</p>
            <button
              type="button"
              className="btn btn-outline-primary btn-block mb-5"
            >
              <i className="bi bi-twitter"></i>
              <span className="ml-3">Sign in with Twitter</span>
            </button>
            <p className="small text-center">
              Don't have an account yet? <a href="">Create account</a>
            </p>
          </form>
        </div>
        <div className="col h-100 d-none d-md-inline">
          <img
            className="img-fluid image"
            src="https://source.unsplash.com/m2Wd_bTUSGw/640x958"
            alt="login page"
          ></img>
        </div>
      </div>
    </div>
  );
}
