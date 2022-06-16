import React from 'react'

function SignIn() {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>InstaBook</h2>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button class="btn waves-effect waves-light" type="submit">
          Sign In         
        </button>
      </div>
    </div>
  );
}

export default SignIn