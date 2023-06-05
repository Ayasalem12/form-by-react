// App.js
import React, { useState } from 'react';
import './styles.css';
import SignUpFormPatient from './components/SignUpFormPatient';
import SignUpFormDoctor from './components/SignUpFormDoctor';
import SignInForm from './components/SignInForm';
import s from "./img/s.svg";
import z from "./img/z.svg";

function App() {
  const [isPatientSignUp, setIsPatientSignUp] = useState(false);
  const [isDoctorSignUp, setIsDoctorSignUp] = useState(false);

  const handlePatientSignUp = () => {
    setIsPatientSignUp(true);
    setIsDoctorSignUp(false);
  };

  const handleDoctorSignUp = () => {
    setIsPatientSignUp(false);
    setIsDoctorSignUp(true);
  };

  const handleSignIn = () => {
    setIsPatientSignUp(false);
    setIsDoctorSignUp(false);
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          {isPatientSignUp && <SignUpFormPatient />}
          {!isPatientSignUp && !isDoctorSignUp && <SignInForm />}
        </div>

        <div className="signin-signup-2">
          {isDoctorSignUp && <SignUpFormDoctor />}
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <button className="btn1 transparent" id="sign-patient-btn" onClick={handlePatientSignUp}>
              Sign up as patient
            </button>
            <br />
            <button className="btn1 transparent" id="sign-doctor-btn" onClick={handleDoctorSignUp}>
              Sign up as doctor
            </button>
          </div>
          <img src={s} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignIn}>
              Sign in
            </button>
          </div>
          <img src={z} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
