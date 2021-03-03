import React from "react";

const UploadPhoto = () => {
  return (
    <>
      <section className="checkout-banner start-designing text-default" style={{marginTop:"77px"}}>
        <div className="container">
          <h1 className="text-default banner-title">How to Take the Best Photo</h1>
        </div>
      </section>

      <section className="gray-section">
        <div className="container">
          <div className="white-box desktop-view largest-text payment-wrap">
            <div className="ajax-container" style={{ minHeight: "250px" }}>
              <div className="largest-text">
                <div className="clearfix">
                  <div className="col-sm-8 col-sm-offset-2 text-center" style={{margin:"auto"}} >
                    <h2 className="main-title" >
                      Upload a Photo of Your Existing Home or Your Home Under
                      Construction
                      <a href="javascript:;" className="house-wrap-stage">
                        <img src="img/questionmark_circle.png" alt="" />
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              <hr className="w-95" />

              <div className="top-space-30 clearfix d-flex small gray">
                <div className="col-lg-4 col-xs-12 col-sm-4 col-md-4 text-center">
                  <div className="image">
                    <img src="img/clock.png" alt="" />
                  </div>
                  <p>
                    For the best results, we recommend taking your photo between
                    10am and 4pm. Overcast conditions are best.
                  </p>
                </div>
                <div className="col-lg-4 col-xs-12 col-sm-4 col-md-4 text-center">
                  <div className="image">
                    <img src="img/camera.png" alt="" />
                  </div>

                  <p>
                    Uploaded project images need to be a minimum of 3MB. The
                    quality of this image will be reflected the final product.
                  </p>
                </div>
                <div className="col-lg-4 col-xs-12 col-sm-4 col-md-4 text-center">
                  <div className="image">
                    <img src="img/home.png" alt="" />
                  </div>
                  <p>
                    Be sure to avoid pictures that are blurry, far-away or
                    obstructed by objects.
                  </p>
                  <a href="javascript:;" className="see-example">
                    See Example
                  </a>
                </div>
              </div>

              <br />
              <hr className="w-95" />
              <div className="vsmall-container space-6 container">
                {/* <div className="alert alert-danger hide"></div> */}
                <div className="row">
                  <div className="col-sm-12 text-left">
                    <div className="home_build_title">
                      <h3 className="large-heading2 blue-text">Upload Photo</h3>
                      <h4>or</h4>
                      <div className="home_build_subtext">
                        Click{" "}
                        <a className="home-not-build" href="#">
                          here
                        </a>{" "}
                        if your home is not yet built.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kv-main">
                  <form enctype="multipart/form-data">
                    <div className="form-group">
                      <div className="file-input file-input-ajax-new">
                        <div className="file-preview ">
                          <button
                            type="button"
                            className="close fileinput-remove">
                            ×
                          </button>
                          <div
                            className="file-drop-zone clickable"
                            tabindex="-1">
                            <div className="file-drop-zone-title">
                              <img src="img/upload-img.jpg" height="100" />
                            </div>
                            <div className="file-preview-thumbnails"></div>
                            <div className="clearfix"></div>{" "}
                            <div className="file-preview-status text-center text-success"></div>
                            <div
                              className="kv-fileinput-error file-error-message"
                              style={{ display: "none" }}></div>
                          </div>
                        </div>
                        <div
                          className="kv-upload-progress kv-hidden"
                          style={{ display: "none" }}>
                          <div className="progress">
                            <div
                              className="progress-bar bg-success progress-bar-success progress-bar-striped active"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "0%" }}>
                              0%
                            </div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <input
                        id="homepic"
                        type="file"
                        className="file"
                        name="homephoto"
                        style={{ display: "none" }}
                      />
                    </div>
                  </form>
                </div>

                <div className="text-center ">
                  <form
                    method="post"
                    accept-charset="utf-8"
                    id="frmPhoto"
                    className="contactus"
                    novalidate="novalidate"
                    action="/HomeDesign/load-steps">
                    <div style={{ display: "none" }}>
                      <input type="hidden" name="_method" value="POST" />
                    </div>
                    <input type="hidden" name="photo" id="homephoto" value="" />
                    <input type="hidden" name="step" value="step-3" />{" "}
                    <div className="hide">
                      <p>
                        <a
                          href="javascript: void(0);"
                          className=""
                          onclick="additionalPhotosModal();">
                          <i className="fa fa-plus"></i>{" "}
                          <b>Add Additional Photos</b>
                        </a>
                      </p>
                      <button type="button" className="blue-btn next-step">
                        Next
                      </button>
                    </div>
                    <div
                      className="modal fade"
                      id="additional_photos_modal"
                      role="dialog">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content ">
                          <div
                            className="modal-header"
                            style={{ borderBottom: "1px solid #e5e5e5" }}>
                            <h5 className="modal-title additional-photo-title">
                              Uploading various angles allows us to choose
                              <br />
                              which image will render the best results.
                            </h5>
                            <button
                              style={{
                                position: "absolute",
                                right: "10px",
                                top: "6px",
                              }}
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close">
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="col-sm-3  col-xs-6">
                              <div className="upload-panel">
                                <div className="kv-main">
                                  <div className="form-group">
                                    <div className="file-input file-input-ajax-new">
                                      <div className="file-preview ">
                                        <button
                                          type="button"
                                          className="close fileinput-remove">
                                          ×
                                        </button>
                                        <div
                                          className="file-drop-zone clickable"
                                          tabindex="-1">
                                          <div className="file-drop-zone-title">
                                            <img
                                              src="img/upload-img.jpg"
                                              height="100"
                                            />
                                          </div>
                                          <div className="file-preview-thumbnails hide-content"></div>
                                          <div className="clearfix"></div>{" "}
                                          <div className="file-preview-status text-center text-success"></div>
                                          <div
                                            className="kv-fileinput-error file-error-message"
                                            style={{ display: "none" }}></div>
                                        </div>
                                      </div>
                                      <div
                                        className="kv-upload-progress kv-hidden"
                                        style={{ display: "none" }}>
                                        <div className="progress">
                                          <div
                                            className="progress-bar bg-success progress-bar-success progress-bar-striped active"
                                            role="progressbar"
                                            aria-valuenow="0"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: "0%" }}>
                                            0%
                                          </div>
                                        </div>
                                      </div>
                                      <div className="clearfix"></div>
                                    </div>
                                    <input
                                      type="file"
                                      id="mcs-0"
                                      className="file mcs-upload-files"
                                      name="mcs-file-0"
                                      style={{ display: "none" }}
                                    />
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  name="additional_photos[0]"
                                  id="mcs-file-0"
                                  value=""
                                />{" "}
                              </div>
                            </div>
                            <div className="col-sm-3  col-xs-6">
                              <div className="upload-panel">
                                <div className="kv-main">
                                  <div className="form-group">
                                    <div className="file-input file-input-ajax-new">
                                      <div className="file-preview ">
                                        <button
                                          type="button"
                                          className="close fileinput-remove">
                                          ×
                                        </button>
                                        <div
                                          className="file-drop-zone clickable"
                                          tabindex="-1">
                                          <div className="file-drop-zone-title">
                                            <img
                                              src="img/upload-img.jpg"
                                              height="100"
                                            />
                                          </div>
                                          <div className="file-preview-thumbnails hide-content"></div>
                                          <div className="clearfix"></div>{" "}
                                          <div className="file-preview-status text-center text-success"></div>
                                          <div
                                            className="kv-fileinput-error file-error-message"
                                            style={{ display: "none" }}></div>
                                        </div>
                                      </div>
                                      <div
                                        className="kv-upload-progress kv-hidden"
                                        style={{ display: "none" }}>
                                        <div className="progress">
                                          <div
                                            className="progress-bar bg-success progress-bar-success progress-bar-striped active"
                                            role="progressbar"
                                            aria-valuenow="0"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: "0%" }}>
                                            0%
                                          </div>
                                        </div>
                                      </div>
                                      <div className="clearfix"></div>
                                    </div>
                                    <input
                                      type="file"
                                      id="mcs-1"
                                      className="file mcs-upload-files"
                                      name="mcs-file-1"
                                      style={{ display: "none" }}
                                    />
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  name="additional_photos[1]"
                                  id="mcs-file-1"
                                  value=""
                                />{" "}
                              </div>
                            </div>
                            <div className="col-sm-3  col-xs-6">
                              <div className="upload-panel">
                                <div className="kv-main">
                                  <div className="form-group">
                                    <div className="file-input file-input-ajax-new">
                                      <div className="file-preview ">
                                        <button
                                          type="button"
                                          className="close fileinput-remove">
                                          ×
                                        </button>
                                        <div
                                          className="file-drop-zone clickable"
                                          tabindex="-1">
                                          <div className="file-drop-zone-title">
                                            <img
                                              src="img/upload-img.jpg"
                                              height="100"
                                            />
                                          </div>
                                          <div className="file-preview-thumbnails hide-content"></div>
                                          <div className="clearfix"></div>{" "}
                                          <div className="file-preview-status text-center text-success"></div>
                                          <div
                                            className="kv-fileinput-error file-error-message"
                                            style={{ display: "none" }}></div>
                                        </div>
                                      </div>
                                      <div
                                        className="kv-upload-progress kv-hidden"
                                        style={{ display: "none" }}>
                                        <div className="progress">
                                          <div
                                            className="progress-bar bg-success progress-bar-success progress-bar-striped active"
                                            role="progressbar"
                                            aria-valuenow="0"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: "0%" }}>
                                            0%
                                          </div>
                                        </div>
                                      </div>
                                      <div className="clearfix"></div>
                                    </div>
                                    <input
                                      type="file"
                                      id="mcs-2"
                                      className="file mcs-upload-files"
                                      name="mcs-file-2"
                                      style={{ display: "none" }}
                                    />
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  name="additional_photos[2]"
                                  id="mcs-file-2"
                                  value=""
                                />{" "}
                              </div>
                            </div>
                            <div className="col-sm-3  col-xs-6">
                              <div className="upload-panel">
                                <div className="kv-main">
                                  <div className="form-group">
                                    <div className="file-input file-input-ajax-new">
                                      <div className="file-preview ">
                                        <button
                                          type="button"
                                          className="close fileinput-remove">
                                          ×
                                        </button>
                                        <div
                                          className="file-drop-zone clickable"
                                          tabindex="-1">
                                          <div className="file-drop-zone-title">
                                            <img
                                              src="img/upload-img.jpg"
                                              height="100"
                                            />
                                          </div>
                                          <div className="file-preview-thumbnails hide-content"></div>
                                          <div className="clearfix"></div>{" "}
                                          <div className="file-preview-status text-center text-success"></div>
                                          <div
                                            className="kv-fileinput-error file-error-message"
                                            style={{ display: "none" }}></div>
                                        </div>
                                      </div>
                                      <div
                                        className="kv-upload-progress kv-hidden"
                                        style={{ display: "none" }}>
                                        <div className="progress">
                                          <div
                                            className="progress-bar bg-success progress-bar-success progress-bar-striped active"
                                            role="progressbar"
                                            aria-valuenow="0"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: "0%" }}>
                                            0%
                                          </div>
                                        </div>
                                      </div>
                                      <div className="clearfix"></div>
                                    </div>
                                    <input
                                      type="file"
                                      id="mcs-3"
                                      className="file mcs-upload-files"
                                      name="mcs-file-3"
                                      style={{ display: "none" }}
                                    />
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  name="additional_photos[3]"
                                  id="mcs-file-3"
                                  value=""
                                />{" "}
                              </div>
                            </div>
                            <br clear="all" />
                            <button
                              type="button"
                              className="blue-btn"
                              data-dismiss="modal"
                              style={{ padding: "5px 12px" }}>
                              Upload
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>{" "}
                </div>
                <p
                  className=" col-sm-12 text-left"
                  style={{ paddingLeft: "0" }}>
                  <a
                    href="javascript: void(0)"
                    className="text-right"
                    onclick="loadStep('step-1', 1, 0);">
                    <i className="fa fa-arrow-left"></i> Back
                  </a>
                </p>
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
                            For premium results, uploaded project images need to
                            be a minimum of 3MB.
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
                            Do you have any additional spaces you would like to
                            see rendered? Easy enough! Just send a picture of
                            that space.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal fade" id="wrapStageModal" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content example-photo-project-modal">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        style={{ marginTop: "-4px", marginRight: "-5px" }}>
                        <span aria-hidden="true">×</span>
                      </button>
                      <h1>
                        Pre-Construction
                        <br />
                        or House Wrap Stage
                      </h1>
                    </div>
                    <div className="modal-body text-center">
                      <div className="row">
                        <div className="col-sm-6 text-center left_side_box pb-15">
                          <p style={{ paddingTop: "0" }}>
                            This refers to homeowners who are currently
                            constructing a new home or a significant addition.
                          </p>
                          <p style={{ paddingTop: "0" }}>
                            In order to properly render your project, we need
                            either your architectural plans or a clear photo of
                            your home if it is in the house wrap stage.
                          </p>
                        </div>
                        <div className="col-sm-6 text-center pb-15">
                          <img src="img/wrap-stage.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal fade" id="homeNotBuild" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header text-center">
                      <h1>Homes or Additions Not Yet Built</h1>
                      <h2>
                        If your home or addition is in the plan phase and not
                        yet constructed, please follow these steps:{" "}
                      </h2>
                    </div>
                    <div className="modal-body text-center">
                      <ul>
                        <li>
                          <span>1</span>
                          <p>
                            Email us your final architectural plans in .DWG or
                            .PDF format to{" "}
                            <a href="mailto:info@dzinly.com">info@dzinly.com</a>
                          </p>
                        </li>
                        <li>
                          <span>2</span>
                          <p>
                            Describe what view you are looking to have rendered.
                            (i.e. front, rear...)
                          </p>
                        </li>
                        <li>
                          <span>3</span>
                          <p>Receive a quote for your project.</p>
                        </li>
                        <li>
                          <span>4</span>
                          <p>
                            If you wish to proceed, we will build a realistic
                            image of your home to which materials/colors can be
                            applied.
                          </p>
                        </li>
                      </ul>
                      <p className="space-10"></p>
                      <button
                        type="button"
                        className="blue-btn"
                        data-dismiss="modal"
                        aria-label="Close">
                        OKAY
                      </button>

                      <div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadPhoto;
