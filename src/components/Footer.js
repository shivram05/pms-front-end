import React from "react";
import logo from "../imgs/images.jpg";
import {
  MdLocationPin,
  MdLocalPhone,
  MdCopyright,
  MdFacebook,
} from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="App-footer">
      <div className="last-footer">
        WAA Project: Property Management System{" "}
      </div>
      <div className="footer-contents">
        <div className="left">
          <p className="footer-sub-title">WAA-Final-Project</p>
          <div className="footer-sub-content">
            <span>
              <MdLocationPin />
            </span>
            <span className="title-sub-data">Fairfield, Iowa</span>
          </div>
          <div className="footer-sub-content">
            <span>
              <MdLocalPhone />
            </span>
            <span className="title-sub-data">+01 641 -11-22-3333</span>
          </div>
          <div className="footer-sub-content">
            <span>
              <MdCopyright />
            </span>
            <span className="title-sub-data">
              WAA-Final-Projecte All Rights Reserved
            </span>
          </div>
        </div>
        <div className="right">
          <p className="footer-sub-title">Follow Us On</p>
          <div className="footer-sub-content">
            <span>
              <MdFacebook />
            </span>
            <span className="title-sub-data">
              facebook.com/WAA-Final-Project
            </span>
          </div>
          <div className="footer-sub-content">
            <span>
              <FaTwitter />
            </span>
            <span className="title-sub-data">
              twitter.com/WAA-Final-Project
            </span>
          </div>
          <div className="footer-sub-content">
            <span>
              <RiInstagramFill />
            </span>
            <span className="title-sub-data">
              instagram.com/WAA-Final-Project
            </span>
          </div>
        </div>
      </div>
    </footer>
  );

  // <section className="about-section footer">
  //   <h2 className="about-section__primary"></h2>
  //   <p>
  //     Lorem ipsum is placeholder text commonly used in the graphic, print, and
  //     publishing industries for previewing layouts and visual mockups <br />
  //     +515-9816535
  //   </p>

  //   <div className="footer-container">
  //   <img
  //     className="images"
  //     src={logo}
  //     alt="Car Rentals"
  //   />
  //         <p>House Rentals {new Date().getFullYear()}. All rights reserved</p>

  //   </div>

  // </section>
  // );
}

// import "./Footer.css";
// export default function Footer() {
//   return(
// <footer>
//   <div class="container" className="footer-container">
//     <div class="row">
//       <div class="col-md-4">
//         <h4>About Us</h4>
//         <p>Discover Your Dream Home with Us.</p>
//       </div>
//       <div class="col-md-4">
//         <h4>Contact Us</h4>
//         <ul>
//           <li><i class="fa fa-map-marker"></i> 1000 N 4th Street, Fairfield, IA</li>
//           <li><i class="fa fa-phone"></i> 555-555-1234</li>
//           <li><i class="fa fa-envelope"></i> info@myhome.com</li>
//         </ul>
//       </div>
//       <div class="col-md-4">
//         <h4>Follow Us</h4>
//         <ul class="social-icons">
//           <li><a href="#">facebook.com/myhome<i class="fa fa-facebook"></i></a></li>
//           <li><a href="#">twitter.com/myhome<i class="fa fa-twitter"></i></a></li>
//           <li><a href="#">linkedin.com/myhome<i class="fa fa-linkedin"></i></a></li>
//           <li><a href="#">instagram.com/myhome<i class="fa fa-instagram"></i></a></li>
//         </ul>
//       </div>
//     </div>
//     <div class="row">
//       <div class="col-md-12">
//         {/* <hr> */}
//         <p class="text-center">&copy; 2023 My Home Pvt. Ltd. All rights reserved.</p>
//       </div>
//     </div>
//   </div>
// </footer>
// )}
