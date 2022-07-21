
import React, {useState} from "react";
import { CartState } from "../Context/Context";
import './Login.css';

export default function (props) {
   
  const {authState: {
    username,
    password,
    isLoggedIn,
    loginError
  }, authDispatch} =  CartState();

  const handleForm = (e) =>{
    e.preventDefault();
    if(username === "admin@gmail.com" && password==="admin"){
      authDispatch({type: "LOGIN_SUCCESS"});
    }
    else{
      authDispatch({type: "LOGIN_ERROR"})
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleForm}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => 
              authDispatch({
                type: 'USERNAME', value:e.target.value
              })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => 
              authDispatch({
                type: 'PASSWORD', value:e.target.value
              })}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
     </div>
  )
}