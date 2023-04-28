import React, { useEffect, useRef, useState } from "react";
import "../cssfile/login.css";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast"
import Cookies from 'js-cookie';

function LoginContainer() {
  const params = useLocation();

  console.log("LoginContainer pathname=>", params.pathname);

  const loginRef = useRef();
  const navigate = useNavigate();

  const loginOperation = (e) => {
    e.preventDefault()

    const loginReq = {};
    const formData = loginRef.current;
    loginReq.email = formData['username'].value;
    loginReq.password = formData['password'].value;
    authenticateLoginAPI(loginReq);
  };


  async function authenticateLoginAPI(loginReq) {
    axios.post("http://localhost:8080/api/v1/authenticate/login", loginReq)
      .then(r => {
        toast.success("Username logged in successfully.")
        // console.log(r.data);
        doSuccessfulOperationLogin(r.data);
        doPageRedirection();
      }).catch(e => {
        // console.log(e.message)
        //SHOW  error
        toast.error("Username or password is incorrect.")
      })
  };

  function doSuccessfulOperationLogin(loginResponse) {
    const userData = {
      accessToken: loginResponse.accessToken,
      userId: loginResponse.uid,
      loggedIn: true
    };
    // console.log(userData);
    Cookies.set("userData", JSON.stringify(userData));
  }


  function doPageRedirection(params) {
    // console.log("COOKIE", JSON.parse(Cookies.get("userData")));;
    // console.log("KEI VAHCA?",  v);
    navigate("/customer");
    // const usr =Cookies.get("userData");

  }



  const logInDefault = <>
    <div>
      <form ref={loginRef}>
        <div className="register-content">
          <h1>Login to PSW</h1>
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            aria-describedby="emailHelp"
            name="username"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter password"
            name="password"
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="btn btn-primary"
            onClick={loginOperation}
          >
            Sign in
          </button>
          <div className="spacer"></div>

          {/* {params.pathname === "/seller" ? (
            <Link to="/seller/register">
              <button type="submit" className="btn btn-primary"              >
                create account
              </button>
            </Link>
          ) : (
            <Link to="/login/register">
              <button type="submit" className="btn btn-primary"
              >
                create account
              </button>
            </Link>
          )} */}
        </div>
      </form >
    </div >
  </>;


  useEffect(() => {
    if (Cookies.get("userData")
      && JSON.parse(Cookies.get("userData")).loggedIn) {
      navigate("/redirecttocustomer");
    }
  }, [])

  return (
    <>
      {logInDefault}
      <toast />
    </>

  );
}

export default LoginContainer;
