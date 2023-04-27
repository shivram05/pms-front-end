import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

// import logo from "../imgs/images.jpg";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function CustomerNavigation() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("login");
    console.log("clicke me");
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
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/buy">
                Buy
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/seller">
                Seller
              </a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" href="/property">
                Favourite Property
              </a>
            </li>
          </ul>
          <span class="navbar-text">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/reset">
                  RESET PASSWORD
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/">
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
