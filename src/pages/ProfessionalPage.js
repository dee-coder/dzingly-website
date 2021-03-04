import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import HowItWorks from '../components/HowItWorks';
import Membership from '../components/Professional/Membership';
import CustomerSection from '../components/CustomerSections';

const ProfessionalPage = () => {
  const renderTooltip = (props) => (
    <Tooltip {...props}>
      <div style={{ padding: "9px" }}>
        Once your Design palettes are finalized, your completed rendering will
        be delivered within two business days.
      </div>
    </Tooltip>
  );

  return (
    <>
      <div className="home_banner" style={{ padding: "97px 50px 60px" }}>
        <div className="container">
          <div className="row d-flex mobile-flex">
            <div className="col-md-5 text-center big-screen mt-5">
              <h1
                className="banner-title"
                style={{
                  paddingBottom: "22px",
                  borderBottom: "2px solid #01adef",
                }}>
                Reimagine Your Client's Home
              </h1>
              <p style={{ padding: "8px", fontSize: "25px" }}>
                Quickly present ideas for your client's home, using brand name
                colors and materials you select.&nbsp;
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                  <a href="javascript:;" class="house-wrap-stage red-tooltip">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </a>
                </OverlayTrigger>
              </p>
              <Link to="/get-started" className="blue-btn">
                Get Started
              </Link>
            </div>
            <div className="col-md-7 right-wrapper-home-banner-image">
              <div id="header-rotating-wrapper">
                <img
                  className="home-banner-item"
                  alt="Homeowner Banner One"
                  src="/public/img/homepage-header-3.png"
                  style={{ border: "none", display: "none" }}
                />
                <img
                  className="home-banner-item"
                  alt="Homeowner Banner Two"
                  src="/public/img/homepage-header-3.png"
                  style={{
                    border: "none",
                    display: "block",
                    opacity: "0.00198879",
                  }}
                />
                <img
                  className="home-banner-item"
                  alt="image"
                  src="img/pro-header-1.jpg"
                  style={{
                    border: "none",
                    display: "block",
                    opacity: "0.998011",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HowItWorks/>
      <Membership/>
      <CustomerSection/>
    </>
  );
};

export default ProfessionalPage;
