import React from "react";
import Facebookico from "../assets/image/icon_facebook.png";
import Twitterico from "../assets/image/icon_twitter.png";
import Instagramico from "../assets/image/icon_instagram.png";
import Twitchico from "../assets/image/icon_twitch.png";
import Mailico from "../assets/image/icon_mail.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-margin">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md mx-auto">
              <ul className="list-unstyled footer-text">
                <li className="pb-3">
                  Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                </li>
                <li className="pb-3">binarcarrental@gmail.com</li>
                <li className="pb-3">081-233-334-808</li>
              </ul>
            </div>
            <div className="col-md mx-auto">
              <ul className="list-unstyled menu-footer">
                <li className="pb-3">Our Services</li>
                <li className="pb-3">Why Us</li>
                <li className="pb-3">Testimonial</li>
                <li className="pb-3">FAQ</li>
              </ul>
            </div>
            <div className="col-md mx-auto">
              <p className="footer-text">Connect With Us</p>
              <div className="d-flex flex-row gap-3">
                <img src={Facebookico} width="24" alt="icon_facebook" />
                <img src={Instagramico} width="24" alt="icon_instagram" />
                <img src={Twitterico} width="24" alt="icon_twitter" />
                <img src={Mailico} width="24" alt="icon_mail" />
                <img src={Twitchico} width="24" alt="icon_twitch" />
              </div>
            </div>
            <div className="col-md mx-auto">
              <p className="footer-text">Connect With Us</p>
              <button type="button" className="foot-button">
                Footer Button
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
