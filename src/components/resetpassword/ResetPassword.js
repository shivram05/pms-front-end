import React, { useState } from "react";
import CustomerHeader from "../customer/CustomerHeader";
import Footer from "../Footer";
import Button from "react-bootstrap/Button";
import "./ResetPassword.css";

// export const ResetPassword = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordMatch, setPasswordMatch] = useState(true);

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would send a request to your server to reset the password

//     if (password !== confirmPassword) {
//         setPasswordMatch(false);
//       } else {
//         setPasswordMatch(true);
//          console.log("Password has been reset. Please login with new password");
//       }
//   };

//   return (
//     <div>
//       <div>
//         <CustomerHeader />
//       </div>

//       {/*<form onSubmit={handleSubmit}>
//       <label>
//         Password:
//         <input type="password" value={password} onChange={handlePasswordChange} />
//       </label>
//       <br />
//       <label>
//         Confirm Password:
//         <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
//       </label>
//       <br />
//       {!passwordMatch && <div>Passwords do not match</div>}
//       <input type="submit" value="Submit" />
//     </form>
//   ); */}

//       <form onSubmit={handleSubmit}>
//         <div className="resetPassword">
//           <label htmlFor="newPassword">New Password</label>
//           <input
//             type="password"
//             id="newPassword"
//             value={password}
//             onChange={handlePasswordChange}
//             // onChange={(e) => setPassword(e.target.value)}
//             style={{
//               backgroundColor: "#f2f2f2",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//               padding: "8px",
//               marginLeft: "40px",
//               height: "25px",
//             }}
//             required
//           />
//           <br /> <br />
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//             style={{
//               backgroundColor: "#f2f2f2",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//               padding: "8px",
//               marginLeft: "15px",
//               height: "25px",
//             }}
//             required
//           />

//         </div>
//         <div className="resetButton">
//         {!passwordMatch && <div>Passwords do not match</div>}
//         <Button as="input" type="reset" value="Reset" />
//         </div>

//       </form>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
      // do something else with the passwords
      console.log("Password reset successfully");
    }
  };

  return (
    <div>
      <div>
        <CustomerHeader />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="resetPassword">
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              style={{
                backgroundColor: "#f2f2f2",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginLeft: "76px",
                height: "25px",
              }}
            />
          </label>
          <br />
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={{
                backgroundColor: "#f2f2f2",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginLeft: "15px",
                height: "25px",
              }}
            />
          </label>
          <br />
          {!passwordMatch && <div>Passwords do not match</div>}
          <Button as="input" type="reset" value="Reset" />
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
};
