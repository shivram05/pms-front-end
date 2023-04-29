import React, { useState, useEffect } from "react";
import CustomerHeader from "../customer/CustomerHeader";
import Footer from "../Footer";
import Button from "react-bootstrap/Button";
import "./ResetPassword.css";
import { useNavigate } from "react-router";
import { useRef } from "react";
import axios from "axios";

import toast from "react-hot-toast"
import Cookies from 'js-cookie';

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const emailRef = useRef();

  useEffect(() => {
    console.log(passwordMatch);
  }, [passwordMatch]);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "" || confirmPassword === "") {
      return;
    }

    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
      // do something else with the passwords

      requestPasswordChangeAPI()


    }
  };

  function requestPasswordChangeAPI() {
    const data = { email: emailRef.current.value, psw: password }
    axios.put(" http://localhost:8080/api/v1/users/forgotpassword", data)
      .then(r => {
        toast.success('"Password reset successfully"');      // console.log(r.data);
        navigate("/customer");
      }).catch(e => {
        // console.log(e.message)
        //SHOW  error
        toast.error("Something went wrong.")
      })


  }



  const formComponent = <> <div>
    <div>
      <CustomerHeader />
    </div>
    <form onSubmit={handleSubmit}>
      <div className="resetPassword">
        <label>
          User Email:
          <input
            type="email"
            ref={emailRef}
            style={{
              backgroundColor: "#f2f2f2",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              marginLeft: "76px",
              height: "25px",
            }}
            required
          />
        </label>
        <br />
        <br />
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
            required
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
            required
          />
        </label>
        <br />
        <br />

        {!passwordMatch && <div id="passwordMessage">Password does not match.</div>}
        <Button as="input" type="submit" value="Reset" />
      </div>
    </form>
  
  </div></>;

  return (
    <>
      {formComponent}
      <toast /></>


  );
};
