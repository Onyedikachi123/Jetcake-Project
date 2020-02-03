import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

 class Login extends Component {
  render() {
      
    return (
      <div className="joinOuterContainer">
          <div className="joinInnerContainer">
            <h1 className="heading">Login</h1>
            <div><input placeholder="email" className="joinInput" type="email" /></div>
            <div><input placeholder="Password" className="joinInput mt-20" type="password" /></div>
            <Link>
              <button className="button mt-20" type="submit">Login</button>
            </Link>
            <p className="buttonText">Not yet a member? <Link to="/signup">Sign up</Link></p>
          </div>
    </div>
    )
  }
}

export default Login;
