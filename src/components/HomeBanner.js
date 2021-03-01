import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <div className="home_banner">
        <div className="container">
          <div className="row d-flex mobile-flex">
            <div className="col-md-5 text-center big-screen">
              <h1 className="banner-title">Reimagine Your Home</h1>
              <p>
                The simple and affordable approach to virtual exterior design.
                See ideas rendered on your home, from professional designers,
                within two business days.&nbsp;
                <a href="javascript:;" className="house-wrap-stage red-tooltip">
                  <img
                    src="/public/img/homepage-header-3.png"
                    alt="tips"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Once your design palettes are finalized, your completed rendering will be delivered within two business days."
                  />
                </a>
              </p>
              <a href="http://thereshome.com/get-started" className="blue-btn">
                Get Started
              </a>
            </div>
            <div className="col-md-7 right-wrapper-home-banner-image">
              <div id="header-rotating-wrapper">
                <img
                  className="home-banner-item"
                  alt="Homeowner Banner One"
                  src="/public/img/homepage-header-3.png"
                  style={{border: "none", display: "none"}}
                />
                <img
                  className="home-banner-item"
                  alt="Homeowner Banner Two"
                  src="/public/img/homepage-header-3.png"
                  style={{border: "none", display: "block", opacity: "0.00198879"}}
                />
                <img
                  className="home-banner-item"
                  alt="image"
                  src="/img/homepage-header-3.png"
                  style= {{border: "none", display: "block", opacity: "0.998011"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
