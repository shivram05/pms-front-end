import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

// import logo from "../imgs/images.jpg";
import NavDropdown from "react-bootstrap/NavDropdown";

import { FavoriteProperty } from "../favorite/FavoriteProperty";

import axios from "axios";
import toast from "react-hot-toast"
import Cookies from 'js-cookie';


export default function CustomerNavigation() {
  const navigate = useNavigate();
  const { favoriteItems, setfavoriteItems } = useContext(FavoriteProperty);


  const logutOperation = (e) => {
    e.preventDefault()
    authenticateLogOutAPI();
  };


  async function authenticateLogOutAPI() {
    axios.post("http://localhost:8080/api/v1/authenticate/logout")
      .then(r => {
        toast.success("User logged out successfully.")
        Cookies.remove('userData');
        navigate("/login");
      }).catch(e => {

      })
  };


  const handleclick = () => {
    navigate("/login");
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="customer">
          Home
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <span class="navbar-text">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" className="btn btn-primary" href="/reset">
                  RESET PASSWORD
                </a>
              </li>
              <p>&nbsp; &nbsp; </p>
              <li class="nav-item">
                <a className="btn btn-primary" onClick={logutOperation}>
                  SIGN OUT
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
}
