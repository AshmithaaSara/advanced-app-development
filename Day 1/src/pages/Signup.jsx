// // import React from 'react';
// import '../assets/css/signup.css';
// import { Link } from "react-router-dom"; 
// import { FaUser,FaLock } from "react-icons/fa";

// export default function Signup() {
//   return (
//     <div className='signup-main'>
//         <form action='' className='wrapper-signup'>
//             <h1>SignUp</h1>
//             <div className='input-box'>
//                 <input type='email' placeholder='Your Email Id' required/>
//                 <FaUser className='icon'/>
//             </div>
//             <div className="input-box">
//                 <input type='password' placeholder='Your Password' required />
//                 <FaLock className='icon'/>
//             </div>
//             <div className="input-box">
//                 <input type='password' placeholder='Confirm your Password' required />
//                 <FaLock className='icon'/>
//             </div>
//             <button type='submit' >Register</button>
//             <div className="register-link">
//                 <p>Already have an Account?<a href='#'><Link to='/login'>Login</Link></a></p>
//             </div>
//         </form>
//     </div>
//   )
// }
import '../assets/css/signup.css'
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
export default function Signup() {
  return (
    <div className='signup-main'>
        <div className="image">

        </div>
      <div className="demos">
        <form action='' className='signup-wrapper'>
          <h1>Sign Up</h1>
          <div className='signup-input-box'>
            <input type='text' placeholder='First Name' required />
            <FaUser className='signup-icon' />
          </div>
          <div className='signup-input-box'>
            <input type='email' placeholder='Email' required />
            <FaEnvelope className='signup-icon' />
          </div>
          <div className='signup-input-box'>
            <input type='password' placeholder='Password' required />
            <FaLock className='signup-icon' />
          </div>
          <button type='submit' className='signup-button'>Sign Up</button>
          <div className='signup-register-link'>
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}