import React from 'react'
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>InstaBook</h2>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button class="btn waves-effect waves-light" type="submit">Sign In</button>
        <h5><Link to="/SignUp">Create new account</Link></h5>
      </div>
    </div>
  );
}

export default SignIn