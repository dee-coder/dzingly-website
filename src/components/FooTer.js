import React from "react";

const FooTer = () => {
  return (
    <div id="footer-navbar" className="container" style={{marginTop:"99px"}} >
      <p className="text-center">
        {" "}
        <span className="c">©</span>2021 DZINLY<span className="r">®</span>. ALL
        RIGHTS RESERVED.
      </p>
      <ul
        className="menu list-inline"
        style={{
          textAlign:"center"
        }}>
        <li className="list-inline-item" >
          <a href="/">About</a>
        </li>
        <li className="list-inline-item" >
          <a href="/" title="Home">
            Home
          </a>
        </li>
        <li className="list-inline-item" >
          <a
            className="ht_how_it_work click-scroll"
            href="/"
            title="How It Works">
            How It Works
          </a>
        </li>
        <li className="list-inline-item" >
          <a
            className="ht_pricing click-scroll"
            href="/"
            title="Pricing">
            Pricing
          </a>
        </li>
        <li className="list-inline-item" >
          <a className="ht_faq" href="/" title="FAQs">
            FAQ
          </a>
        </li>
        <li className="list-inline-item" >
          <a
            className="ht_about_us click-scroll"
            href="/"
            title="About">
            About
          </a>
        </li>

        <li className="list-inline-item" >
          <a href="/contact-us" title="Contact">
            Contact
          </a>
        </li>

        <li className="list-inline-item" >
          <a href="/privacy-policy" title="Privacy Policy">
            Privacy Policy
          </a>
        </li>
        <li className="list-inline-item" >
          <a
            href="/Term-conditions"
            title="Terms and Conditions">
            Terms and Conditions
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooTer;
