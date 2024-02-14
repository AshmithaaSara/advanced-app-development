// import React from 'react';
import '../assets/css/login.css';
import { Link } from "react-router-dom"; 
import { FaUser,FaLock } from "react-icons/fa";


export default function Login() {
  return (
    <div className='login-main'>
        <div className="demo">
        {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
        </div>
        <div className="demo1">
        <form action='' className='wrapper'>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text' placeholder='UserName' required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type='password' placeholder='Password' required />
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type='checkbox'/>Remember me</label>
                <a href='#'>Forgot Password?</a>
            </div>
            <button type='submit' >Login</button>
            <div className="register-link">
                <p>Dont have an account?</p>
                <a href='#'><Link to="/signup">Register</Link></a>
            </div>
        </form>
        </div>
    </div>
  )
}