import React from "react";

const HowItWorks = () => {
  return (
    <>
      <section id="how-it-works" className="heading-section">
        <div id="about-us">
          <div className="container">
            <h4 className="title">How DZINLY Works</h4>
            <div className="border-bottom"></div>
            <p>
              Using brand name colors and materials, we'll show you what
              <br/> your future home will look like.
            </p>
          </div>
        </div>
      </section>
      <section className="large-text" style={{overflow:"hidden"}}>
        <div className="container position-relative">
          <div className="row">
            <div className="numbering">
              <div className="row-mid-box cd-icons-filling js-cd-icons-filling cd-icons-filling--new-color--1">
                <div className="number-conuter video-wrap">
                  <div className="video-wrapper">
                    <video
                      id="how2work"
                      src="img/DZINLY_Screencast_and_visual_ideas.mp4"
                      poster="img/how-to-work-poster.jpg"
                      __idm_id__="720784385"></video>
                    <button
                      className="video-overlay-play-button"
                      style={{padding:"25px calc(50% - 150px)"}}>
                      <img
                        src="img/PlaybuttonWebversion-3.gif"
                        width="150"
                        height="150"
                      />
                    </button>
                    <div className="row pause-box text-center" style={{bottom: "40%"}}>
                      <a className="pause-video" href="javascript:;">
                        See how DZINLY works
                      </a>
                    </div>
                  </div>
                </div>

                <div className="timeline-row number-conuter cd-service--2 js-cd-service">
                  <div className="timeline-dot fb-bg">1</div>
                  <div className="timeline-content">
                    <img className="" alt="image4" src="/img/h-1.jpg" />
                    <p style={{display:"block ",paddingTop:"15px", marginBottom:"-10px"}}>
                      Take a photo of your existing home or
                      <br/>home under construction.<br/>
                      <a href="javascript:;" className="house-wrap-stage">
                        What's This?
                      </a>
                    </p>
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="timeline-row number-conuter cd-service--3 js-cd-service">
                  <div className="timeline-dot fb-bg">2</div>
                  <div className="timeline-content">
                    <img className="" alt="image4" src="img/basic-info.jpg" />
                    <p>Share your inspirations and ideas.</p>
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="timeline-row number-conuter cd-service--4 js-cd-service">
                  <div className="timeline-dot fb-bg">3</div>
                  <div className="timeline-content">
                    <img className="" alt="image4" src="img/h-3.jpg" />
                    <p>
                      Connect with a personal design coordinator, who'll work
                      with professional designers to provide the best exterior
                      design ideas for your home.
                    </p>
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="timeline-row number-conuter cd-service--5 js-cd-service">
                  <div className="timeline-dot fb-bg">4</div>
                  <div className="timeline-content">
                    <img className="" alt="image4" src="img/h-4.jpg" />
                    <p>
                      Compare color and material palette(s), then select which
                      exterior design rendering(s) you'd like to see.
                    </p>{" "}
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="timeline-row number-conuter cd-service--6 js-cd-service">
                  <div className="timeline-dot fb-bg">5</div>
                  <div className="timeline-content">
                    <img className="" alt="image4" src="img/h-5.jpg" />
                    <p>
                      Once you approve our design(s), you will receive a
                      finished rendering within two business days.
                    </p>
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="timeline-row number-conuter cd-service--7 js-cd-service">
                  <div className="timeline-dot fb-bg">6</div>
                  <div className="timeline-content">
                    <img className="" alt="image4" src="img/h-6.jpg" />
                    <p>
                      Toggle between designs to select the exterior you like
                      best. Add or change areas to see different virtual
                      options.
                    </p>
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="timeline-row number-conuter cd-service--8 js-cd-service">
                  <div className="timeline-dot fb-bg">7</div>
                  <div className="timeline-content">
                    <img className="" alt="image4" src="img/h-7.jpg" />
                    <p>
                      Use our project resource center to find contractors,
                      product samples and financing options.
                    </p>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mid-border" style={{height: "0px"}}></div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="text-center">
          <a href="http://thereshome.com/get-started" className="blue-btn">
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
