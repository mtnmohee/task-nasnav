import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="top">
          <div className="left">
            <div className="logo">
              <img
                src={process.env.PUBLIC_URL + "/images/logoYellow.svg"}
                alt=""
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla.Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia m nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit
            </p>
          </div>
          <div className="right">
            <div className="right-top">
              <h5>Subscribe to our newsletter</h5>
              <div className="item">
                <input type="text" placeholder="Enter Your Mail" />
                <button>
                  Subscribe <img src="/images/subscribe.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="right-bottom">
              <div className="right-bottom-L">
                <h4>About Us</h4>
                <h4>Contact Us</h4>
                <h4>Track Order</h4>
                <h4>Terms & Conditions</h4>
                <h4>Privacy Policy</h4>
                <h4>Sell With Us</h4>
                <h4>Shipping And Returns</h4>
              </div>
              <div className="right-bottom-R">
                <div className="item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/facebook.svg"}
                    alt=""
                  />
                  <h4>/YESHTERY</h4>
                </div>
                <div className="item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/linkedin.svg"}
                    alt=""
                  />
                  <h4>/YESHTERY</h4>
                </div>
                <div className="item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/instagram.svg"}
                    alt=""
                  />
                  <h4>/YESHTERY</h4>
                </div>
                <div className="item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/twitter.svg"}
                    alt=""
                  />
                  <h4>/YESHTERY</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p>© 2021 yeshtery, all rights reserved.</p>
          </div>
          <div className="center">
            <img src={process.env.PUBLIC_URL + "/images/cash.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "/images/visa.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "/images/master.png"} alt="" />
          </div>
          <div className="right">
            <p>
              Powered By
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/images/nasnavlogo.svg"}
                  alt=""
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
