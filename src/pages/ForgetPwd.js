import React from "react";
import { Link } from "react-router-dom";
import FooTer from '../components/FooTer';

const ForgetPwd = () => {
  return (
    <>
      <section
        className="inner-banner blue-bg"
        style={{ padding: "40px 12px" }}>
        <div className="container">
          <h1 className="text-default" style={{ textTransform: "capitalize" }}>
            Forget Password
          </h1>
        </div>
      </section>

      <section className="gray-section">
        <div className="container">
          <div className="white-box">
            <div className="row ajax-container">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <div className="col-sm-12 no-padding hide" id="fpwd-container">
                  <form
                    method="post"
                    accept-charset="utf-8"
                    id="frmForgotPassword"
                    className="contactus"
                    novalidate="novalidate"
                    action="/login">
                    <div style={{ display: "none" }}>
                      <input type="hidden" name="_method" value="POST" />
                    </div>{" "}
                    <input name="_method" value="POST" type="hidden" />
                    <div className="row">
                      <div className="col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label>
                            Email <span className="required">*</span>{" "}
                          </label>
                          <div className="input text">
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              placeholder="Email address..."
                              id="email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 text-center">
                        <button
                          type="button"
                          className="blue-btn"
                          onclick="forgotPassword(this);">
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                      <Link
                        href="javascript: void(0);"
                        className=""
                        to="/login">
                        Back to Login
                      </Link>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <FooTer/>
    </>
  );
};

export default ForgetPwd;
