/* eslint-disable jsx-a11y/anchor-is-valid */
// SignInForm.js
import React from 'react';

function SignInForm() {
  return (
    <form action="#" className="sign-in-form">
      <h2 className="title">WELCOME</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <div className="checkboxes">
        <label>
          <input type="checkbox" name="loginAs" value="patient" />
          <span className="checkmark"></span>
          Patient
        </label>
        <label>
          <input type="checkbox" name="loginAs" value="doctor" />
          <span className="checkmark"></span>
          Doctor
        </label>
      </div>
      <div className="forgot-password">
        <a href="#">Forgot password?</a>
      </div>
      <input type="submit" value="Login" className="btn solid" />
    </form>
  );
}

export default SignInForm;
