import React from "react";
import logo from "../imgs/images.jpg";
import {
  MdLocationPin,
  MdLocalPhone,
  MdCopyright,
  MdFacebook
} from "react-icons/md"
import { FaTwitter } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="App-footer">
                <div className="footer-contents">
                    <div className="left">
                        <p className="footer-sub-title">Shivram Realstate</p>
                        <div className="footer-sub-content">
                            <span><MdLocationPin /></span>
                            <span className="title-sub-data">Fairfield, Iowa</span>
                        </div>
                        <div className="footer-sub-content">
                            <span><MdLocalPhone /></span>
                            <span className="title-sub-data">+01 641 -11-22-3333</span>
                        </div>
                        <div className="footer-sub-content">
                            <span><MdCopyright /></span>
                            <span className="title-sub-data">Shivram Realstate All Rights Reserved</span>
                        </div>
                    </div>
                    <div className="right">
                        <p className="footer-sub-title">Follow Us On</p>
                        <div className="footer-sub-content">
                            <span><MdFacebook /></span>
                            <span className="title-sub-data">facebook.com/shivramrealstate</span>
                        </div>
                        <div className="footer-sub-content">
                            <span><FaTwitter /></span>
                            <span className="title-sub-data">twitter.com/shivramrealstate</span>
                        </div>
                        <div className="footer-sub-content">
                            <span><RiInstagramFill /></span>
                            <span className="title-sub-data">instagram.com/shivramrealstate</span>
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
