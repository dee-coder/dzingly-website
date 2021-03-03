import React from "react";
import FooTer from "../components/FooTer";
import {Link} from "react-router-dom"

const GetStartedPage = () => {
  return (
    <>
      <section className="checkout-banner start-designing text-default">
        <div className="container">
          <h1 className="text-default banner-title"></h1>
        </div>
      </section>
      <section className="gray-section">
        <div className="container">
          <div className="white-box desktop-view  payment-wrap">
            <div className="row">
              <div className=" t"></div>
              <div className="clearfix" style={{margin:"auto"}}>
                <div className="largest-text  " >
                  <p className="text-center">
                    Please tell us who you are so we can tailor our website to
                    serve you better.
                    <br />
                  </p>
                </div>

                <div className="clearfix space-10 text-center d-flex title-upper-main">
                  <a
                    href="/get-started-design-your-own-home"
                    title="Homeowner"
                    className="btn  checkbox-btn mybtn">
                    Homeowner
                  </a>
                  <div className="professional_btn">
                    <div className="title-upper title-upper2">Coming Soon</div>
                    <a
                      href="/get-started-design-your-project"
                      title="Professional"
                      className="btn checkbox-btn mybtn">
                      Professional
                    </a>
                  </div>
                </div>
              </div>

              <p className="space-10 text-center">
                Already have an account?{" "}
                <Link
                  className="login-here"
                  to="/login"
                  title="Sign In">
                  Log in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooTer />
    </>
  );
};

export default GetStartedPage;
