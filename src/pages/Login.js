import React ,{useState} from "react";
import {Link} from "react-router-dom"


const Login = () => {


    const [click, setClick] = useState(false);

    const ForgetPwd=()=>{
        setClick(true)
    }



  return (
    <>
      <section className="inner-banner blue-bg" style={{padding:"40px 12px",marginTop:"77px"}}>
        <div className="container">
          <h1 className="text-default" style= {{textTransform:"capitalize"}}>
            Sign In
          </h1>
        </div>
      </section>

      <section className="gray-section">
        <div className="container">
          <div className="white-box">
            <div className="row ajax-container">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <div className="clearfix">
                  <div className="bdr-bottom clearfix">
                    <div className="col-sm-12 text-center no-padding">
                      <h2 id="sfpwd">Sign In</h2>
                      <div className="space-4"></div>
                    </div>
                  </div>
                </div>
                <div className="space-30 space40">
                  <div className="col-sm-12 no-padding" id="signin-container">
                    <form
                      method="post"
                      accept-charset="utf-8"
                      id="frmLogin"
                      className="contactus"
                      novalidate="novalidate"
                      action="/login">
                      <div style={{display:"none"}}>
                        <input type="hidden" name="_method" value="POST" />
                      </div>{" "}
                      <input name="_method" value="POST" type="hidden" />
                      <input name="rurl" value="" type="hidden" />
                     
                      <div className="row">
                        <div className="col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label>
                              Email <span className="required">*</span>{" "}
                            </label>
                            <div className="input text">
                              <input
                                type="text"
                                name="username"
                                className="form-control"
                                placeholder="Email address..."
                                maxlength="50"
                                id="username"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label>
                              Password <span className="required">*</span>{" "}
                            </label>
                            <div className="input password required">
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password..."
                                required="required"
                                id="password"
                              />
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                          <button
                            type="button"
                            className="blue-btn"
                            onclick="processLogin(this);">
                            Sign In
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="space-10"></div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 text-center">
                        <Link
                          href="javascript: void(0);"
                          className=""
                          to="/forgetPwd">
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                    <div className="space-10"></div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 text-center">
                        <Link to="/get-started" className="">
                          Create Account
                        </Link>
                      </div>
                    </div>
                  </div>

                  
                  <div className="col-sm-12 no-padding hide" id="fpwd-container">
                    {/* <div
                      className="col-xs-12"
                      id="msgPass"
                      style={{padding:"12px"}}></div> */}
                    
                    {/* <div className="space-10"></div> */}
                    
                  </div>
                </div>



                <div className="clearfix col-xs-12 no-padding">
                  <div className="space-14"></div>
                  <div className="bdr-bottom"></div>
                  <div className="space-18"></div>
                </div>
                <div className="space-8"></div>
                <div className="space-30 space40">
                  <div className="row">
                    <div className="col-sm-12 col-xs-12"></div>
                  </div>
                </div>
                <div className="space-18">
                  <br />
                </div>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Login;
