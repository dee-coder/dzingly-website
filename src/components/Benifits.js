import React from "react";

const Benifits = () => {
  return (
    <section className="benefit-box justify-content-center align-content-center">
      <div className="container">
        <div className="heading-section">
          <h1 className="title">Why DZINLY?</h1>
          <div className="border-bottom"></div>
        </div>

        <div className="row d-flex " >
          <div className="col-sm-8 col-sm-offset-2 top-space-20"  style={{
          textAlign:"center",
          margin:"auto"
        }}>
            <div className=" cost-text-box text-left h100" style= {{maxWidth:"612px"}} >
              <table className="table nogap">
                <thead>
                  <tr>
                    <td width="68%" align="left" valign="middle">
                      &nbsp;
                    </td>
                    <td
                      width="27%"
                      align="center"
                      style={{verticalAlign:"bottom" }}>
                      <img src="img/logo-icon.png" alt="" />  
                      <br />
                      DZINLY
                    </td>
                    <td style={{verticalAlign:"bottom" }}>
                      <div>Traditional Designers</div>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Project Price</td>
                    <td align="center">$99+</td>
                    <td align="center">$1,500+</td>
                  </tr>
                  <tr>
                    <td>No on-site visits needed</td>
                    <td align="center">
                      <i className="fa fa-check"></i>
                    </td>
                    <td align="center">
                      <i className="fa fa-close red"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Renderings of your exact house</td>
                    <td align="center">
                      <i className="fa fa-check"></i>
                    </td>
                    <td align="center">
                      <i className="fa fa-close red"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Toggle between multiple designs</td>
                    <td align="center">
                      <i className="fa fa-check"></i>
                    </td>
                    <td align="center">
                      <i className="fa fa-close red"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>First revision is free</td>
                    <td align="center">
                      <i className="fa fa-check"></i>
                    </td>
                    <td align="center">
                      <i className="fa fa-close red"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>$5 per additional versions</td>
                    <td align="center">
                      <i className="fa fa-check"></i>
                    </td>
                    <td align="center">
                      <i className="fa fa-close red"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>Projects never expire</td>
                    <td align="center">
                      <i className="fa fa-check"></i>
                    </td>
                    <td align="center">
                      <i className="fa fa-close red"></i>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Material Selection</td>
                    <td align="center">Top Brands</td>
                    <td align="center">Limited</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
