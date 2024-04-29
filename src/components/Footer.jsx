import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ikqrgfw', 'template_3tv2d0l', form.current, {
        publicKey: 't7K_YzAvF05s1FYuc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
      <div>
        <div className="container-fluid">
          <div className="row p-4" style={{ color: "white", backgroundColor: "rgb(87, 86, 86)" }}>
            <div className="col-sm-6 col-md-6" style={{ color: "white"}}>
              <h2>Free Workouts & Advice</h2>
              <p>We send you the latest workouts, videos, expert guides, and deals.</p>
            </div>
            <div className="col-sm-6 col-md-6" style={{ display: "flex", color: "white"}}>
              <div className="container">
                <div className="form-box">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="input-group">
                      <div className="input-field" id="namefield" style={{ overflow: "hidden" }}>
                        <input name="user_email" className="m-2 p-2 text-black" type="text" placeholder="Email Address" />
                        <button className="bg-white text-black rounded-xl p-2">Subscribe</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-3" style={{ color: "white", backgroundColor: "rgb(51, 50, 50)" }}>
                <div className="row p-4">
                  <div className="col-md-12">
                    <h4>CUSTOMER SERVICE</h4>
                  </div>
                  <div className="col-md-12">
                    <span>Help Center</span>
                    <br />
                    <span>Track Your Order</span>
                    <br />
                    <span>Account Login</span>
                    <br />
                    <span>Return & Exchange</span>
                    <br />
                    <span>Contact Us</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3" style={{ color: "white", backgroundColor: "rgb(51, 50, 50)" }}>
                <div className="row p-4">
                  <div className="col-md-12">
                    <h4>FOLLOW</h4>
                  </div>
                  <div className="col-md-12">
                    <div className="s_handles">
                      <span className="flex">
                        <a href="https://www.linkedin.com/in/vidhan-gupta-b72784200/" target="_blank"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin.png" alt="linkedin"/></a>
                        <a href="https://www.instagram.com/vidhan__gupta/" target="_blank"><img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/></a>
                        <a href="https://github.com/vidhan16" target="_blank"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png" alt="github"/></a>
                        <a href="https://www.facebook.com/vidhan.gupta.395/" target="_blank"><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png" alt="facebook-new"/></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3" style={{ color: "white", backgroundColor: "rgb(51, 50, 50)" }}>
                <div className="row p-4">
                  <div className="col-md-12">
                    <h4>ABOUT</h4>
                  </div>
                  <div className="col-md-12">
                    <span>About Us</span>
                    <br />
                    <span>Reward Program</span>
                    <br />
                    <span>Careers</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3" style={{ color: "white", backgroundColor: "rgb(51, 50, 50)" }}>
                <div className="row p-4">
                  <div className="col-md-12">
                    <h4>WORK WITH US</h4>
                  </div>
                  <div className="col-md-12">
                    <span>Contribute to M&S</span>
                    <br />
                    <span>Affiliate Program</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-12" style={{ color: "white", backgroundColor: "rgb(23, 23, 23)", textAlign: "center" }}>
                <span>2006-2024, Flex & Flow, LLC. 1180 Chitkara University Rajpura-Chandigarh Highway, SC, 29209. Phone: 85703-87608</span>
                <br />
                <span>Terms of Use - Privacy Policy - Cookie Policy - Accessibility Statement</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;
