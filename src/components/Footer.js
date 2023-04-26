import React from "react";
import logo from "../imgs/images.jpg";

export default function Footer() {
  return (
    <section className="about-section footer">
      <h2 className="about-section__primary"></h2>
      <p>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups <br />
        +515-9816535
      </p>

      <div className="footer-container">
      <img
        className="images"
        src={logo}
        alt="Car Rentals"
      />
            <p>House Rentals {new Date().getFullYear()}. All rights reserved</p>

      </div>
      
    </section>
  );
}
