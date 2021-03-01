import React from "react";

const ToggelSection = () => {
  return (
    <div>
      <div className="col-lg-12">
        <h4 className="title title3">Try DZINLY's Toggle Feature</h4>
        <div className="border-bottom" style={{marginBottom:"20px"}}></div>
        <div className="col-md-6 col-md-offset-3">
          <p style={{fontSize:"18px ",paddingBottom:"30px" ,textAlign: "center"}}>
            The toggle feature allows you to interact <br />
            with various ideas for your home in real time.
            <br />
            Try it below.
          </p>
          <span className="arrowdown"></span>
        </div>
      </div>

      <div className="row">
        <div className="custombox" style={{ paddingTop:"3%"}}>
          <div className="col-md-8 col-md-offset-2 col-xs-12 no-padding">
            <div className="" style={{overflow:"hidden"}}>
              <div className="col-sm-12 col-xs-12 no-padding home-photo">
                <div className="parent-img">
                  <img
                    src="/files/demo/26/Before_1611170582.jpg"
                    className="main-img"
                    alt="Toggle Two "
                  />
                  <div className="selected-area-items text-center">
                    <div
                      className="selected-area-list"
                      style={{ display:" none"}}></div>
                  </div>
                </div>

                <div className="col-xs-12 no-padding layer-photo-container">
                  <div className="area-1-pic area-pd-pics">
                    <img
                      className="lp-54   "
                      id="lp-54"
                      data-dd-name="Area-1"
                      src="/files/demo/26/Trim_1611171393.png"
                      border="0"
                      style={{zIndex:"11"}}
                    />
                    <img
                      className="lp-86   "
                      id="lp-86"
                      data-dd-name="Area-1"
                      src="/files/demo/26/Off White _ Trim_1611696274.png"
                      border="0"
                    />{" "}
                  </div>
                  <div className="area-2-pic area-pd-pics">
                    <img
                      className="lp-55   "
                      id="lp-55"
                      data-dd-name="Area-2"
                      src="/files/demo/26/Gray Roof_1611171449.png"
                      border="0"
                      style={{ zIndex:12}}
                    />
                    <img
                      className="lp-56   "
                      id="lp-56"
                      data-dd-name="Area-2"
                      src="/files/demo/26/Brown Roof_1611171526.png"
                      border="0"
                    />{" "}
                  </div>
                  <div className="area-3-pic area-pd-pics">
                    <img
                      className="lp-57   "
                      id="lp-57"
                      data-dd-name="Area-3"
                      src="/files/demo/26/Deep Blue siding _1611171614.png"
                      border="0"
                      style={{ zIndex:"13"}}
                    />
                    <img
                      className="lp-58   "
                      id="lp-58"
                      data-dd-name="Area-3"
                      src="/files/demo/26/Green Siding_1611171658.png"
                      border="0"
                    />
                    <img
                      className="lp-87   "
                      id="lp-87"
                      data-dd-name="Area-3"
                      src="/files/demo/26/New blue siding_1611696831.png"
                      border="0"
                    />{" "}
                  </div>
                  <div className="area-4-pic area-pd-pics">
                    <img
                      className="lp-66   "
                      id="lp-66"
                      data-dd-name="Area-4"
                      src="/files/demo/26/Black Door_1611259464.png"
                      border="0"
                      style={{ zIndex:"14"}}
                    />
                    <img
                      className="lp-68   "
                      id="lp-68"
                      data-dd-name="Area-4"
                      src="/files/demo/26/Gray Door_1611259519.png"
                      border="0"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="space-8"></div>
              <div id="tour-info-4"></div>
              <div
                className="col-sm-12 col-xs-12 no-padding"
                style={{textAlign:"left",float:"left" }} >
                <div className="outerwrapper">
                  <div className="area-selections swiper-container-initialized swiper-container-horizontal">
                    <div
                      className="swiper-wrapper"
                      style= {{zIndex: "9999", transform:" translate3d(0px, 0px, 0px)"}}
                      id="swiper-wrapper-81cc385df6e550107"
                      aria-live="polite">
                      <div
                        className="swiper-slide swiper-slide-active"
                        role="group"
                        aria-label="1 / 4"
                        style={{width: "155.25px", marginRight: "15px" }}>
                        <div className="area-element ae-1 sarea">
                          <div className="tour-tips">
                            <div className="tour-info" id="tour-info-2">
                              <a href="#" className="close-tour">
                                x
                              </a>
                              <div className="title-tour">Add More Swatches</div>
                              <div className="tour-content">
                                Once your project is complete, you may add more
                                swatches here.
                              </div>
                            </div>
                            <div className="tour-info bottom one" id="tour-info-1">
                              <a href="#" className="close-tour">
                                x
                              </a>
                              <div className="title-tour">Toggle Your Swatches</div>
                              <div className="tour-content">
                                Click these swatches to select a color/material
                                to view from your purchases.
                              </div>
                            </div>
                          </div>

                          <p className="text-left">
                            <strong>Area 1</strong>
                          </p>

                          <div className="areabox">
                            <img src="/img/add-area-bg.jpg" alt=""/>
                              <span
                                className="plus-add bluecolor"
                                data-krypt=""
                                style={{ cursor:" pointer"}} >
                                <i className="fa fa-plus"></i>
                              </span>

                              <div
                                className="area-image"
                                data-swatch-palette-key="54"
                                style={{background:"#f9f9f9", cursor: "pointer" }}>
                                <div
                                  className="view-area-palette"
                                  data-area-id="Area 1">
                                  <img
                                    src="/files/demo/26/Benjamin Moore _ Simply white_1611171407.jpg"
                                    border="0"
                                  />{" "}
                                </div>
                                <div className="hide dropdown back">
                                  <button
                                    type="button"
                                    className="btn btn-default dropdown-toggle view-area-palette">
                                    Click to View Swatches
                                  </button>
                                </div>
                              </div>

                              <div
                                className="area-image"
                                data-swatch-palette-key="86"
                                style={{background:"#f9f9f9", cursor: "pointer" }}>
                                <div
                                  className="view-area-palette"
                                  data-area-id="Area 1">
                                  <img
                                    src="/files/demo/26/White Dove _ Benjamin Moore_1611695438.jpg"
                                    border="0"
                                  />{" "}
                                </div>
                                <div className="hide dropdown front">
                                  <button
                                    type="button"
                                    className="btn btn-default dropdown-toggle view-area-palette">
                                    Click to View Swatches
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          style={{width: "155.25px", marginRight: "15px"}}
                          role="group"
                          aria-label="2 / 4">
                          <div className="area-element ae-2 sarea">
                            <p className="text-left">
                              <strong>Area 2</strong>
                            </p>

                            <div className="areabox">
                              <img src="/img/add-area-bg.jpg" alt="" />
                              <span
                                className="plus-add bluecolor"
                                data-krypt=""
                                style= {{cursor: "pointer"}} >
                                <i className="fa fa-plus"></i>
                              </span>

                              <div
                                className="area-image"
                                data-swatch-palette-key="55"
                                style={{background:"#f9f9f9" ,cursor: "pointer" }}>
                                <div
                                  className="view-area-palette"
                                  data-area-id="Area 2">
                                  <img
                                    src="/files/demo/26/GAF_ Pewter Gray_1611171465.jpg"
                                    border="0"
                                  />{" "}
                                </div>
                                <div className="hide dropdown back">
                                  <button
                                    type="button"
                                    className="btn btn-default dropdown-toggle view-area-palette">
                                    Click to View Swatches
                                  </button>
                                </div>
                              </div>

                              <div
                                className="area-image"
                                data-swatch-palette-key="56"
                                style={{background:"#f9f9f9", cursor: "pointer" }}>
                                <div
                                  className="view-area-palette"
                                  data-area-id="Area 2">
                                  <img
                                    src="/files/demo/26/GAF_  Mission Brown_1611171526.jpg"
                                    border="0"
                                  />{" "}
                                </div>
                                <div className="hide dropdown front">
                                  <button
                                    type="button"
                                    className="btn btn-default dropdown-toggle view-area-palette">
                                    Click to View Swatches
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{width:" 155.25px", marginRight: "15px"}}
                          role="group"
                          aria-label="3 / 4">
                          <div className="area-element ae-3 sarea">
                            <p className="text-left">
                              <strong>Area 3</strong>
                            </p>

                            <div className="areabox">
                              <img src="/img/add-area-bg.jpg" alt="" />
                              <span
                                className="plus-add bluecolor"
                                data-krypt=""
                                style={{ cursor:" pointer"}} >
                                <i className="fa fa-plus"></i>
                              </span>

                              <div
                                className="area-image"
                                data-swatch-palette-key="57"
                                style={{background:"#f9f9f9", cursor: "pointer" }}>
                                <div
                                  className="view-area-palette"
                                  data-area-id="Area 3">
                                  <img
                                    src="/files/demo/26/Benjamin Moore _ North Sea_1611171626.jpg"
                                    border="0"
                                  />{" "}
                                </div>
                                <div className="hide dropdown back">
                                  <button
                                    type="button"
                                    className="btn btn-default dropdown-toggle view-area-palette">
                                    Click to View Swatches
                                  </button>
                                </div>
                              </div>

                              <div
                                className="area-image"
                                data-swatch-palette-key="58"
                                style={{background:"#f9f9f9", cursor: "pointer" }}>
                                <div
                                  className="view-area-palette"
                                  data-area-id="Area 3">
                                  <img
                                    src="/files/demo/26/Benjamin Moore _ Sharkskin_1611171675.jpg"
                                    border="0"
                                  />{" "}
                                </div>
                                <div className="hide dropdown front">
                                  <button
                                    type="button"
                                    className="btn btn-default dropdown-toggle view-area-palette">
                                    Click to View Swatches
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-slide"
                          style= {{width: "155.25px", marginRight: "15px "}}
                          role="group"
                          aria-label="4 / 4">
                          <div className="area-element ae-4 sarea">
                            <p className="text-left">
                              <strong>Area 4</strong>
                            </p>

                            <div className="areabox">
                              <img src="/img/add-area-bg.jpg" alt="" />
                              <span
                                className="plus-add bluecolor"
                                data-krypt=""
                                style={{cursor: "pointer"}} >
                                <i className="fa fa-plus"></i>
                              </span>

                              <div
                                className="area-image"
                                data-swatch-palette-key="66"
                                style={{background:"#f9f9f9", cursor: "pointer" }}>
                                <div
                                  className="view-area-palette"
                                  data-area-id="Area 4">
                                  <img
                                    src="/files/demo/26/Custom Front Door_1611259485.jpg"
                                    border="0"
                                  />{" "}
                                </div>
                                <div className="hide dropdown back">
                                  <button
                                    type="button"
                                    className="btn btn-default dropdown-toggle view-area-palette">
                                    Click to View Swatches
                                  </button>
                                </div>
                              </div>

                              <div
                                className="area-image"
                                data-swatch-palette-key="68"
                                style={{background:"#f9f9f9", cursor: "pointer" }}>
                                <div
                                  className="view-area-palette"
                                  data-area-id="Area 4">
                                  <img
                                    src="/files/demo/26/Custom Nine Light_1611260368.jpg"
                                    border="0"
                                  />{" "}
                                </div>
                                <div className="hide dropdown front">
                                  <button
                                    type="button"
                                    className="btn btn-default dropdown-toggle view-area-palette">
                                    Click to View Swatches
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span
                        className="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swipebtn swipebtnmain swiper-button-next swiper-button-disabled"
                style={{right:"0", paddingTop:"5%"}}
                tabindex="-1"
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-81cc385df6e550107"
                aria-disabled="true"></div>
              <div
                className="swipebtn swipebtnmain swiper-button-prev swiper-button-disabled"
                style={{right:"0", paddingTop:"5%"}}
                tabindex="-1"
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-81cc385df6e550107"
                aria-disabled="true"></div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ToggelSection;
