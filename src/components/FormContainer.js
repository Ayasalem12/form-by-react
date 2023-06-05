// import React, { useState } from "react";
// import "../styles.css";
// import SignUpForm from "./SignUpFormPatient";
// import SignInForm from "./SignInForm";
// import SignUpFormDoctor from "./SignUpFormDoctor";
// import s from "../img/s.svg";
// import z from "../img/z.svg";
// const FormContainer = () => {
//   const [mode, setMode] = useState("");
//   const [datadoctor, setDataDoctor] = useState("");

//   const handleSignUpClick = (mode) => {
//     setMode(mode);
//   };
//   const handleSignUpDoctorClick = (datadoctor) => {
//     setDataDoctor(datadoctor);
//   };

//   const handleSignInClick = () => {
//     if (mode!== "") {
//       setMode("");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="forms-container">
//         {mode === "patient"? (
//           <SignUpForm handleSignUpClick={handleSignUpClick} />
//         ) : datadoctor === "doctor"? (
//           <SignUpFormDoctor handleSignUpClick={handleSignUpDoctorClick} />
//         ) : (
//           <SignInForm handleSignInClick={handleSignInClick} />
//         )}
//       </div>
//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <button
//               className="btn1 transparent"
//               onClick={() => handleSignUpClick("patient")}
//             >
//               Sign up as patient
//             </button>
//             <br />
//             <button
//               className="btn1 transparent"
//               onClick={() => handleSignUpDoctorClick("doctor")}
//             >
//               Sign up as doctor
//             </button>
//             <br />
//           </div>
//           <img src={s} className="image" alt="" />
//         </div>
//         <div className="panel right-panel">
//           <div className="content">
//             <button className="btn transparent" onClick={handleSignInClick}>
//               Sign in
//             </button>
//           </div>
//           <img src={z} className="image" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormContainer;