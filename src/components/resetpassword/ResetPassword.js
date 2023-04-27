import React, { useState, useEffect } from "react";
import CustomerHeader from "../customer/CustomerHeader";
import Footer from "../Footer";
import Button from "react-bootstrap/Button";
import "./ResetPassword.css";
import { useNavigate } from "react-router";

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

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
      navigate("/customer");
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

          {!passwordMatch && <div id="passwordMessage">Password does not match.</div>}
          <Button as="input" type="submit" value="Reset" />
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
};
