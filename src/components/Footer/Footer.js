import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Footer extends Component {
  render() {
    return (
        <footer>
        {/* Footer Wiget Wrapper
        <div className="footer-widget-area">
          <div className="container">
            <div className="row">
              {/* Footer Widget */}
              {/* <div className="col-lg-3 col-md-6 col-12">
                <div className="site-info m-b-65">
                  <div className="footer-logo m-b-35">
                    <img src="assets/img/logo-white.png" alt="" />
                  </div>
                  <p>We are a software house from USA as focused on custom software develop ment business templet.</p>
                  <ul className="footer-address m-t-30">
                    <li><strong>Adress:</strong>  27 Division St, New York,  NY <br /> 10002, United States of America </li>
                    <li><strong>Website:</strong> gullfoss.wgl-demo.net</li>
                    <li><strong>Email:</strong> gullfoss@mail.com</li>
                  </ul>
                  <ul className="social-icon m-t-30">
                    <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                    <li><Link to="#"><i className="fab fa-linkedin-in" /></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                    <li><Link to="#"><i className="fab fa-google-plus-g" /></Link></li>
                  </ul>
                </div>
              </div> */}
              {/* Footer Widget */}
              {/* <div className="col-lg-3 col-md-6 col-12">
                <div className="widgets footer-nav m-b-65">
                  <h4 className="fs-25 m-b-35"> Useful Links</h4>
                  <ul>
                    <li><Link to="#">About Company</Link></li>
                    <li><Link to="#">Our People</Link></li>
                    <li><Link to="#">Latest Media</Link></li>
                    <li><Link to="#">Our Branches</Link></li>
                    <li><Link to="#">Case Studies</Link></li>
                    <li><Link to="#">Our People</Link></li>
                    <li><Link to="#">Latest Media</Link></li>
                    <li><Link to="#">Our Branches</Link></li>
                  </ul>
                </div>
              </div> */}
              {/* Footer Widget */}
              {/* <div className="col-lg-3 col-md-6 col-12">
                <div className="widgets recent-post m-b-65">
                  <h4 className="fs-25 m-b-35"> Recent Posts</h4>
                  <ul>
                    <li>
                      <span className="recent-img"><img src="assets/img/recent-post/01.jpg" alt="" /></span>
                      <span className="recent-content">
                        <Link to="single-post-2.html">Build up product and mak somthing</Link>
                        <i className="fas fa-calender" /> 14 Nov 2019
                      </span>
                    </li>
                    <li>
                      <span className="recent-img"><img src="assets/img/recent-post/01.jpg" alt="" /></span>
                      <span className="recent-content">
                        <Link to="single-post-2.html">Build up product and mak somthing</Link>
                        <i className="fas fa-calender" /> 14 Nov 2019
                      </span>
                    </li>
                    <li>
                      <span className="recent-img"><img src="assets/img/recent-post/01.jpg" alt="" /></span>
                      <span className="recent-content">
                        <Link to="single-post-2.html">Build up product and mak somthing</Link>
                        <i className="fas fa-calender" /> 14 Nov 2019
                      </span>
                    </li>
                  </ul>	
                </div>
              </div> */}
              {/* Footer Widget */}
              {/* <div className="col-lg-3 col-md-6 col-12">
                <div className="widgets subscribe-widget m-b-65">
                  <h4 className="fs-25 m-b-35"> Subscribe</h4>
                  <p>Our foundation may be insurance as but we have evolved and so have the solutions that we provide.</p>
                  <form className="subscribe-form">
                    <input type="text" placeholder="Your name *" />
                    <input type="text" placeholder="Your email *" />
                    <button type="submit">Submit Now <i className="fas fa-paper-plane" /></button>
                  </form>
                </div>	
              </div>
              <div className="back-to-top">
                <Link to="#"><img src="assets/img/icon/angle-up.png" alt="" /></Link>
              </div>
            </div>
          </div>
        </div> */} 
        {/* Footer copyriht wrap */}
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 cl-12">
                <Link to="#">Terms of use | Privacy Environmental Policy</Link>
              </div>
              <div className="col-lg-6 cl-12">
                <p className="text-right">Copyright © 2019 Gullfoss by <Link to="#">SmartSoftCode</Link>. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
