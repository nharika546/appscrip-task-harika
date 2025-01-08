"use client";
import React, { useState } from "react";
import Image from "next/image";
import LanguageIcon from "../../../public/icons/Language.svg";
import BlackArrow from "../../../public/icons/arrow-right.svg";
import InstaIcon from "../../../public/icons/Insta.svg";
import GpayIcon from "../../../public/icons/g-pay.svg";
import LinkedInIcon from "../../../public/icons/linkedin.svg";
import MasterCardIcon from "../../../public/icons/mastercard.svg";
import OpayIcon from "../../../public/icons/Opay.svg";
import PayPalIcon from "../../../public/icons/paypal.svg";
import AmexIcon from "../../../public/icons/amex.svg";
import ApplePayIcon from "../../../public/icons/apple-pay.svg";
import "./footer.css";
const Footer = () => {
  const [isMettaMuse, setIsMettaMuse] = useState(false);
  const [isQuickLinks, setIsQuickLinks] = useState(false);
  const [isFollowUs, setIsFollowUs] = useState(false);
  return (
    <footer>
      <div className="wrapper width-100">
        <div className="letterAndcontact">
          <div className="newsletter">
            <p className="footerHeading">Be the first to know</p>
            <p>Sign up for updates from mettā muse.</p>
            <div className="inputsBtn">
              <input
                className=""
                type="email"
                placeholder="Enter your e-mail..."
              />
              <button className="subscribeBtn">subscribe</button>
            </div>
          </div>

          <div className="contactDetails">
            <div className="contactUs">
              <p className="footerHeading">contact us</p>
              <div className="contactUsdetails">
                <p>+44 221 133 5360</p>
                <span className="diamond mdsrc">&diams;</span>
                <p>customercare@mettamuse.com</p>
              </div>
            </div>
            <div className="currency">
              <p className="footerHeading">Currency</p>
              <Image src={LanguageIcon} alt="" style={{}} />
              <p className="smallText lgsrc">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="actionsLinksContainer">
          <div className="mettaMuse lgsrc">
            <div className="footerHeadingCont">
              <p className="metta-muse">mettā muse</p>
            </div>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="mettaMuse mdsrc">
            <div
              className="footerHeadingCont"
              onClick={() => setIsMettaMuse((prev) => !prev)}
            >
              <p className="metta-muse">mettā muse</p>
              <Image
                src={BlackArrow}
                alt="BlackArrow"
                height={20}
                width={20}
                style={{
                  rotate: `${isMettaMuse ? "180deg" : "0deg"}`,
                  transition: "rotate 0.15s ease-in-out",
                }}
              />
            </div>
            {isMettaMuse ? (
              <ul className={`${isMettaMuse ? "mt20" : ""}`}>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            ) : null}
          </div>
          <div className="quickLinks lgsrc">
            <div className="footerHeadingCont">
              <p className="footerHeading">Quick Links</p>
            </div>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="quickLinks mdsrc">
            <div
              className="footerHeadingCont"
              onClick={() => setIsQuickLinks((prev) => !prev)}
            >
              <p className="footerHeading">Quick Links</p>
              <Image
                src={BlackArrow}
                alt="BlackArrow"
                height={20}
                width={20}
                style={{
                  rotate: `${isQuickLinks ? "180deg" : "0deg"}`,
                  transition: "rotate 0.15s ease-in-out",
                }}
              />
            </div>
            {isQuickLinks ? (
              <ul className={`${isQuickLinks ? "mt20" : ""}`}>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            ) : null}
          </div>
          <div className="followus">
            <div className="socialLinksContainer lgsrc">
              <div className="footerHeadingCont">
                <p className="footerHeading">Follow Us</p>
              </div>
              <div className="socialAcc">
                <Image src={InstaIcon} alt="InstaIcon" />
                <Image src={LinkedInIcon} alt="LinkedInIcon" />
              </div>
            </div>
            <div className="socialLinksContainer mdsrc">
              <div
                className="footerHeadingCont"
                onClick={() => setIsFollowUs((prev) => !prev)}
              >
                <p className="footerHeading">Follow Us</p>
                <Image
                  src={BlackArrow}
                  alt="BlackArrow"
                  height={20}
                  width={20}
                  style={{
                    rotate: `${isFollowUs ? "180deg" : "0deg"}`,
                    transition: "rotate 0.15s ease-in-out",
                  }}
                />
              </div>
              <div className="socialAcc">
                {isFollowUs ? (
                  <div className={`${isFollowUs ? "mt20" : ""}`}>
                    <Image src={InstaIcon} alt="InstaIcon" />
                    <Image src={LinkedInIcon} alt="LinkedInIcon" />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="paymentMethodsContainer">
              <p className="metta-muse">mettā muse ACCEPTS</p>
              <div className="payments">
                <Image src={GpayIcon} alt="GpayIcon" />
                <Image src={MasterCardIcon} alt="MasterCardIcon" />
                <Image src={PayPalIcon} alt="PayPalIcon" />
                <Image src={AmexIcon} alt="AmexIcon" />
                <Image src={ApplePayIcon} alt="ApplePayIcon" />
                <Image src={OpayIcon} alt="OpayIcon" />
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;