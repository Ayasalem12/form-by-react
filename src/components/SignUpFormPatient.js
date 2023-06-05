/* eslint-disable no-unused-vars */
// SignUpFormPatient.js
import React, { useState } from 'react';

function SignUpFormPatient() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setConfirmPassword.setCustomValidity('Passwords do not match');
    } else {
      setConfirmPassword.setCustomValidity('');
    }
  };

  return (
    <form action="#" className="sign-up-form">
      <h2 className="title">WELCOME PATIENT</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="input-field">
        <i className="fa fa-calendar-o"></i>
        <input type="date" placeholder="Date of birth" />
      </div>
      <input type="submit" className="btn" value="Sign up" />
    </form>
  );
}

export default SignUpFormPatient;
