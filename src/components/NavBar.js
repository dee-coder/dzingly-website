import React from "react";

import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <header className="main-header home-header justify-content-center">
      <div
        className="navbar navbar-fixed-top bs-docs-nav header-v"
        id="top"
        role="banner">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle slideout-menu-toggle" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/">
              <img
                src="/img/Dzinly.png"
                title="Exterior Design of Your Home with Dzinly"
                alt="Dzinly Logo"
              />
            </a>{" "}
          </div>

          <div className="header-inner-right hide">
            <ul className="nav navbar-right">
              <li className="menu-icons">
                <i className="menu-icons-style search search-close search-btn fa fa-search"></i>
                <div className="search-open">
                  <div className="search-inner-section">
                    <label>Type and Press "enter" to Search</label>
                    <input
                      type="text"
                      id="BtnSearch"
                      onfocus="this.placeholder = '';"
                      onblur="this.placeholder='SEARCH FOR PRODUCTS ...';"
                      className="animated fadeIn form-control"
                      placeholder="SEARCH FOR PRODUCTS ..."
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div id="menu-overlay" className="slideout-menu-toggle"></div>
          <div id="menu-overlay2"></div>
          <div
            id="bs-navbar"
            className="navbar-responsive-collapse  mega-menu navbar">
            <div className="menu-container m-1 flex">
              <ul className="nav navbar-nav navbar-right" className="menu list-inline">
                <li className="list-inline-item" >
                  <a
                    className="ht_how_it_works click-scroll"
                    href="http://thereshome.com/#how-it-works"
                    title="How It Works">
                    How It Works
                  </a>
                </li>
                <li className="list-inline-item" >
                  <a
                    className="ht_pricing click-scroll"
                    href="http://thereshome.com/#pricing"
                    title="Pricing">
                    Pricing
                  </a>
                </li>
                <li className="list-inline-item" >
                  <a
                    className="ht_recent_projects click-scroll"
                    href="http://thereshome.com/#recent-projects"
                    title="Pricing">
                    Gallery
                  </a>
                </li>

                <li className="list-inline-item" >
                  <a
                    className="ht_professionals"
                    href="http://thereshome.com/professionals"
                    title="Professionals">
                    Professionals{" "}
                  </a>
                </li>
                <li className="list-inline-item" >
                  <Link
                    className="ht_login"
                    to="/login"
                    title="Sign In">
                    Sign In
                    </Link>
                </li>
                <li className="h-get-started" className="list-inline-item" >
                  <a
                    href="http://thereshome.com/get-started"
                    className="blue-btn"
                    title="Get Started">
                    Get Started
                  </a>
                </li>

                <li className="icon-btn" className="list-inline-item" >
                  <a
                    href="https://www.instagram.com/dzinlyspace"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Find us on instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="icon-btn" className="list-inline-item" >
                  <a
                    href="http://dzinlyinfo.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Our Blog">
                    <i className="icon-edit"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default NavBar;
