import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import logo from "../imgs/images.jpg";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("login");
    console.log("clicke me");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/login">
                Buy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Seller
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/prcoperty">
                Favourite Property
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  SIGN UP
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/login">
                  SIGN IN
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
}
