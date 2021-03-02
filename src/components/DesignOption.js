import React from "react";

const DesignOption = () => {
  return (
    <section
      className="design-options"
      style={{marginTop:"0px", paddingBottom:"20px",backgroundColor:"#F5F5F5"}} >
      <div className="container box">
        <h4 className="title title3">See Your Options</h4>
        <div className="border-bottom"></div>

        <div className="row equal-column">
          <div className="col-md-6 col-sm-6 full-width">
            <div className="text-center image-box">
              <img
                alt="Design Options"
                src="img/design-options-5.jpg"
                style={{border:"none"}}
              />

              <p className="mt-5 text-center text-position">Jackie's Design 1</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 padding-box mobile-top-arrow">
            <div className="box box-shadow right d-flex">
              <div className="outer-block">
                <p className="subtitle">
                  See various options on your home until you land on the perfect
                  design. Fall in love with your design or your money back!
                </p>
                <div className="text-center">
                  <img
                    src="img/dzinly-badge.png"
                    alt="guaranteed money back"
                    style={{maxWidth:"120px", marginBottom:"10px"}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row equal-column">
          <div className="col-md-6 col-sm-6 padding-box mobile-bottom-arrow">
            <div className="box box-shadow left d-flex">
              <div className="outer-block">
                <p className="subtitle">
                  Only looking for minor enhancements on your home such as
                  flower boxes, light sconces or a front door? No problem! We
                  can help you select the perfect fit and show you exactly how
                  it will look on your home.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 full-width">
            <div className="text-center image-box">
              <img
                alt="Design Options"
                src="img/design-options-6.jpg"
                style={{border:"none"}}
              />
              <p className="mt-5 text-center text-position">Jackie's Design 2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignOption;
