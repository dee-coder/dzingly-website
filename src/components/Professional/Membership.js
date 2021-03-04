import React from "react";

const Membership = () => {
  return (
    <>
      <section
        id="pricing"
        className="section-spacer pro-license-box"
        style=  {{marginTop:"40px "}} >
        <div className="container small-container pricing-label-column">
          <div className="row">
            <div className="col-lg-6 space-none">
              <div className="pro-license-info-box text-center">
                <h1>
                  Professional Membership <br />
                  <i style={{fontSize:"20px", display:"inline-block", lineHeight:"1"}} >
                    A professional membership is $165 per month or pay in
                    advance for a discount.
                  </i>
                </h1>
                <p style={{fontSize: "20px", fontWeight:"300", fontStyle:"italic"}}  >
                  Benefits of pro membership:
                </p>
                <ul className="box-list">
                  <li>
                    <p>Use of your business logo</p>
                  </li>
                  <li>
                    <p>Professional pricing on all services</p>
                  </li>
                  <li>
                    <p>Your own personal exterior design coordinator</p>
                  </li>
                  <li>
                    <p>Unlimited projects in your DZINLY cloud portfolio</p>
                  </li>
                  <li>
                    <p>
                      Company advertisement to qualified clients in your area
                    </p>
                  </li>
                  <li>
                    <p>Your projects will never expire</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 space-none">
              <div className="project-pricing-box text-center">
                <h1>
                  Member Project Pricing <br />
                  <i style={{fontSize:"20px", display:"inline-block", lineHeight:"1"}}>
                    Project pricing for members is based on the stage of your
                    client's home.
                  </i>
                </h1>
                <p style={{fontSize: "20px", fontWeight:"300", fontStyle:"italic"}} >
                  Project type and cost:
                </p>
                <div className="row">
                  <div className="selection-item col-md-6 space-none">
                    <label for="select3">
                      <div className="image" >
                        <img src="img/select-image3.jpg" alt="" />
                      </div>
                      <h3>Existing Home</h3>
                      <p className="setup-cost">
                        Setup Cost $49 + $5 <br />
                        for each color/material desired.
                      </p>
                    </label>
                  </div>
                  <div className="selection-item col-md-6 space-none">
                    <label for="select2">
                      <div className="image">
                        <img src="img/select-image2.jpg" alt="" />
                      </div>
                      <h3>Mid-Construction</h3>
                      <p className="setup-cost">
                        Setup Cost $149 + $5 <br />
                        for each color/material desired.
                      </p>
                    </label>
                  </div>
                  <div className="selection-item col-md-8 space-none">
                    <label for="select1">
                      <div className="image">
                        <img src="img/select-image1.jpg" alt="" />
                      </div>
                      <h3>New Construction/Remodeling</h3>
                      <p className="setup-cost">
                        Setup Cost $279 + $5 <br />
                        for each color/material desired.
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container pro-license-info-box no-before"
          style={{maxWidth: "980px" }} >
          <h2 className="text-center">Please Select Your Desired Membership</h2>
          <div className="row">
            <div className="col-sm-4 text-center bdr-r">
              <div className="plan">
                <span className="plan-price">$165/month</span>
                <br /> <i>(Flat rate)</i>
              </div>

              <a
                href="/get-started"
                className="blue-btn">
                Select
              </a>
            </div>
            <div className="col-sm-4 text-center bdr-r">
              <div className="plan">
                <span className="plan-price">$445/quarter </span>
                <br /> <i>(10% off $198 savings)</i>
              </div>

              <a
                href="/get-started"
                className="blue-btn">
                Select
              </a>
            </div>
            <div className="col-sm-4 text-center ">
              <div className="plan">
                <span className="plan-price">$1,683/year </span>
                <br /> <i>(15% off $297 savings)</i>
              </div>

              <a
                href="/get-started"
                className="blue-btn">
                Select
              </a>
            </div>
          </div>
          <p className="text-center top-space-20">
            *There will be a recurring payment.
          </p>
        </div>
        <div id="pricing-example-modal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content simple">
              <div className="modal-body">
                <div className="row">
                  <div className="col">
                    <h1 className="text-center line">Example</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p>
                      Client A House Setup - <span>$49</span>
                    </p>
                    <p>
                      New Roof Shingle - <span>$17</span>
                    </p>
                    <p>
                      New Siding and Color - <span>$17</span>
                    </p>
                    <p>
                      New Trim Color - <span>$17</span>
                    </p>
                    <p className="total">
                      <span>&nbsp;</span>{" "}
                      <span className="line-top">Total -$100</span>
                    </p>
                    <p>
                      <span>&nbsp;</span>
                    </p>
                    <p className="pro-discount">10% Pro discount - $10</p>
                    <p className="grand-total">
                      Grand Total - <span className="line-top">$90</span>
                    </p>{" "}
                    <i
                      className="fa fa-angle-down angle-large"
                      data-dismiss="modal"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;
