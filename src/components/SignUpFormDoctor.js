/* eslint-disable no-unused-vars */
// SignUpFormDoctor.js
import React, { useState } from 'react';

function SignUpFormDoctor() {
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
    <form action="#" className="sign-up-form-2">
      <h2 className="title">WELCOME DOCTOR</h2>
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
          id="password"
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
      <input type="submit" className="btn" value="Sign up" />
    </form>
  );
}

export default SignUpFormDoctor;
