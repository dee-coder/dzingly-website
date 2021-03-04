import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  return (
    <section id="pricing" className="section-spacer large-text package-box justify-content-center" style={{margin:"18px"}} >
      <div className="container">
        <h4 className="title title2 text-center">Homeowner Design Packages</h4>
        <div className="row d-flex justify-content-between equal-columns-wrapper column-box-row">
          <div className="col-md-4 col-sm-12 box columnn-box text-center" style={{backgroundColor:"#F5F5F5",padding:"18px",marginLeft:"29px" }}>
            
            <div className="small-title" >
              <h2>
              Classic <span className="price">$99</span>
              </h2>
            </div>

            <div className="detail" style={{fontSize:"16px", marginBottom:"10px",paddingBottom:"15px", borderBottom:"2px solid #01adef"}} >
              Know exactly what you want to do?
              <br />
              Select this package to send us your ideas.
            </div>

            <ul className="package-benefits">
              <li>
                
                Input the exact colors/materials you’d like to see rendered on
                your home
              </li>
              <li>Includes up to three specific changes</li>
              <li>
                Communicate via chat with your personal design coordinator
              </li>
              <li>
                After your rendering is complete, you can always see additional
                colors/materials for $5 each
              </li>
              <li>Any new area that has not yet been rendered is only $25</li>
              <li>Your projects will never expire</li>
            </ul>

            <a
              href="/get-started-design-your-own-home"
              className="blue-btn"
              data-pp="1">
              Select
            </a>
          </div>

          <div className="col-md-4 col-sm-12 box columnn-box text-center" style={{backgroundColor:"#F5F5F5",padding:"18px"}}>
            <div className="small-title">
              <h2>
              Premium <span className="price">$199</span>
              </h2>
            </div>

            <div className="detail" style={{fontSize:"16px", marginBottom:"10px",paddingBottom:"15px", borderBottom:"2px solid #01adef"}} >
              Need some design help?
              <br />
              Select this package to see our designer's ideas.
            </div>

            <ul className="package-benefits">
              <li>
                Established designers will suggest three different design ideas
                for your home
              </li>
              <li>Includes one design of your choice</li>
              <li>
                Communicate via chat with your personal design coordinator
              </li>
              <li>
                After your rendering is complete, you can always see additional
                colors/materials for $5 each
              </li>
              <li>Any new area that has not yet been rendered is only $25</li>
              <li>Your projects will never expire</li>
            </ul>

            <a
              href="/get-started-design-your-own-home"
              className="blue-btn"
              data-pp="2">
              Select
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
