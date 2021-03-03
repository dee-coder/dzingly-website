import React from "react";
import FooTer from "../components/FooTer";
import {Link} from 'react-router-dom'

const DesignHome = () => {
  return (
    <>
      <section className="checkout-banner start-designing text-default">
        <div className="container">
          <h1 class="text-default banner-title"></h1>
        </div>
      </section>

      <div>
        <section className="gray-section">
          <div className="container">
            <div className="white-box desktop-view largest-text payment-wrap">
              <div className="ajax-container" style={{ minHeight: "250px" }}>
                <div className="largest-text">
                  <div className="clearfix">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 text-center " style={{margin:"auto"}}>
                      <h1 className="main-title2">
                        You are on your way to seeing your dream home!
                      </h1>
                      <h3 className="sub-title2">
                        Be sure you are prepared before you proceed:
                      </h3>
                      <br />
                      <br />
                    </div>
                    <div className="col-sm-2"></div>
                  </div>
                </div>

                <div className="top-space-30 clearfix d-flex small gray row py-30">
                  <div className="col-lg-3 col-xs-12 col-sm-4 col-md-4 d-flex text-center left_text_heading_row">
                    <div className="left_text_heading">
                      <h1 className="title_top">1</h1>
                      <p className="subtitle_bottom">Project Photo</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xs-12 col-sm-4 col-md-4 ">
                    <div className="image">
                      <img src="img/take_photo.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-xs-12 col-sm-4 col-md-4 d-flex">
                    <div className="right_details align-self-center">
                      <p>
                        You will need to take a clear photo of the area on your
                        home you would like to see rendered. Keep in mind that
                        the angle and clarity of your photo determines the
                        quality of the final product.
                      </p>
                      <a href="javascript:;" className="see-example">
                        See Example
                      </a>
                    </div>
                  </div>
                </div>

                <div className="top-space-30 clearfix d-flex small gray row py-30">
                  <div className="col-lg-3 col-xs-12 col-sm-4 col-md-4 d-flex text-center left_text_heading_row">
                    <div className="left_text_heading">
                      <h1 className="title_top">2</h1>
                      <p className="subtitle_bottom">Project Details</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xs-12 col-sm-4 col-md-4 ">
                    <div className="image">
                      <img src="img/make_photo.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-xs-12 col-sm-4 col-md-4 d-flex">
                    <div className="right_details align-self-center">
                      <p>
                        Provide a detailed explanation of what you would like to
                        change on your home.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="top-space-30 clearfix d-flex small gray row py-30">
                  <div className="col-lg-3 col-xs-12 col-sm-4 col-md-4 d-flex text-center left_text_heading_row">
                    <div className="left_text_heading">
                      <h1 className="title_top">3</h1>
                      <p className="subtitle_bottom">Inspiration</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xs-12 col-sm-4 col-md-4 ">
                    <div className="image">
                      <img src="img/outline_photo.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-xs-12 col-sm-4 col-md-4 d-flex">
                    <div className="right_details align-self-center">
                      <p>
                        Upload any inspirational photos you may have. They are
                        helpful to our designers, but are not required.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="modal fade" id="exampleModal" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content example-photo-project-modal">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body text-center">
                        <div className="row">
                          <p className="d-none hide">
                            Review the Brand Color/Material Details.
                          </p>
                          <div className="col-sm-12 text-center">
                            <h2 className="see-example-box-title">
                              Example Photos of Projects{" "}
                            </h2>
                            <h5 className="see-example-box-subtitle">
                              For premium results, uploaded project images need
                              to be a minimum of 3MB.
                            </h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4 text-center pb-15">
                            <img src="img/fullhouse.jpg" alt="" />
                            <h4 className="see-example-box-image-title">
                              Full House
                            </h4>
                            <p className="mt-15">
                              Looking for an overall update for your home? You
                              will want to capture as much of your home as
                              possible.
                            </p>
                          </div>
                          <div className="col-sm-4 text-center pb-15">
                            <img src="img/smallprojects.jpg" alt="" />
                            <h4 className="see-example-box-image-title">
                              Small Projects
                            </h4>
                            <p className="mt-15">
                              Do you want to just update a smaller area like a
                              front porch, deck, etc.? No worries! Just take a
                              photo of that area.
                            </p>
                          </div>
                          <div className="col-sm-4 text-center pb-15">
                            <img src="img/additionalspace.jpg" alt="" />
                            <h4 className="see-example-box-image-title">
                              Additional Spaces
                            </h4>
                            <p className="mt-15">
                              Do you have any additional spaces you would like
                              to see rendered? Easy enough! Just send a picture
                              of that space.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vsmall-container space-6 container mt-15">
                  {/* <div className="alert alert-danger hide"></div> */}

                  <div className="text-center ">
                    <Link to="/upload">
                    <button type="button" className="blue-btn next-step">
                      Next
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooTer />
    </>
  );
};

export default DesignHome;
