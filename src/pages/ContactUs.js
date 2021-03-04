import React from "react";

const ContactUs = () => {
  return (
    <>
      <section className="inner-banner blue-bg">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="gray-section">
        <div className="container">
          <div className="white-box">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <form
                  method="post"
                  accept-charset="utf-8"
                  id="frmContact"
                  className="contactus"
                  action="/contact-us"
                  novalidate="novalidate">
                  <div style={{display:"none"}} >
                    <input type="hidden" name="_method" value="POST" />
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label>
                          Your Name <span>*</span>
                        </label>
                        <div className="input text">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your name..."
                            id="name"
                          />
                        </div>{" "}
                      </div>
                    </div>
                    <div className="col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label>
                          Order Number <span>(If applicable)</span>
                        </label>
                        <div className="input text">
                          <input
                            type="text"
                            name="order_number"
                            className="form-control"
                            placeholder="Order number..."
                            id="order-number"
                          />
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label>
                          Email <span>*</span>
                        </label>
                        <div className="input email">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="e-Mail..."
                            id="email"
                          />
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label>
                          Subject <span>*</span>
                        </label>
                        <div className="input text">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Subject..."
                            id="subject"
                          />
                        </div>{" "}
                      </div>
                    </div>
                    <div className="col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label>
                          Description <span>*</span>
                        </label>
                        <textarea
                          name="description"
                          rows="3"
                          className="form-control"
                          placeholder="Description..."></textarea>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 col-xs-12">
                      <div className="form-group">
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LeMSqwZAAAAAPV5TtyMs5P5eH6qNQ8NYOYKV0tq"
                          data-callback="verifyCaptcha">
                          <div style= {{width: "304px", height: "78px"}} >
                            <div>
                              <iframe
                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeMSqwZAAAAAPV5TtyMs5P5eH6qNQ8NYOYKV0tq&amp;co=aHR0cDovL3RoZXJlc2hvbWUuY29tOjgw&amp;hl=en&amp;v=4eHYAlZEVyrAlR9UNnRUmNcL&amp;size=normal&amp;cb=8n9jd17j22wh"
                                width="304"
                                height="78"
                                role="presentation"
                                name="a-dovdk64bf268"
                                frameborder="0"
                                scrolling="no"
                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                            </div>
                            <textarea
                              id="g-recaptcha-response"
                              name="g-recaptcha-response"
                              className="g-recaptcha-response"
                              style={{width: "250px ", height: "40px", border: "1px solid rgb(193, 193, 193)", margin: "10px 25px",  padding: "0px",  resize:" none ",display: "none"}} ></textarea>
                          </div>
                          <iframe
                            style={{display: "none"}}
                            __idm_frm__="749"></iframe>
                        </div>
                        <div id="g-recaptcha-error"></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="blue-btn">
                      Submit
                    </button>
                  </div>
                </form>{" "}
              </div>

              <div className="col-sm-6 col-xs-12 top-space-30">
                <img
                  src="/img/image7.jpg"
                  className="before_after_image"
                  alt="before-after"
                  height="430"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
