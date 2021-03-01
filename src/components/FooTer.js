import React from "react";

const FooTer = () => {
  return (
    <div id="footer-navbar" className="container">
      <p className="text-center">
        {" "}
        <span className="c">©</span>2021 DZINLY<span className="r">®</span>. ALL RIGHTS
        RESERVED.
      </p>
      <ul className="menu">
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="http://thereshome.com/" title="Home">
            Home
          </a>
        </li>
        <li>
          <a
            className="ht_how_it_work click-scroll"
            href="http://thereshome.com/#how-it-work"
            title="How It Works">
            How It Works
          </a>
        </li>
        <li>
          <a
            className="ht_pricing click-scroll"
            href="http://thereshome.com/#pricing"
            title="Pricing">
            Pricing
          </a>
        </li>
        <li>
          <a className="ht_faq" href="http://thereshome.com/faq" title="FAQs">
            FAQ
          </a>
        </li>
        <li>
          <a
            className="ht_about_us click-scroll"
            href="http://thereshome.com/#about-us"
            title="About">
            About
          </a>
        </li>

        <li>
          <a href="http://thereshome.com/contact-us" title="Contact">
            Contact
          </a>
        </li>

        <li>
          <a href="http://thereshome.com/privacy-policy" title="Privacy Policy">
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="http://thereshome.com/terms-of-use"
            title="Terms and Conditions">
            Terms and Conditions
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooTer;
