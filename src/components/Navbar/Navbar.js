import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <div>
        {/* <div className="loader">
          <span />
          <span />
          <span />
        </div> */}
        <header id="home">
          {/* Haeder Top Area */}
          {/* Logo Wrapper */}
          <div className="header-logo-wrapper  mainmenu-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  {/* Site Logo */}
                  {/* <div className="logo">
                    <Link to="#"><img src="assets/img/logo.png" alt="Gullfoss" /></Link>
                  </div>   */}

                  <nav className="navbar navbar-expand-lg main-nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="mainNav">
                  {/* Site Menus */}
                  <ul className="navbar-nav">
                    <li className="nav-item ">
                      <Link className="nav-link active" href="#home">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="#about">About</Link>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#testimonial">Testimonial</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#faqs">Faqs</a>
                    </li>
                    <li className="nav-item dropdown ">
                      <Link className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Blog
                      </Link>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="blog.html">Blog</a>
                        <a className="dropdown-item" href="single-post.html">Single Blog</a>
                      </div>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" href="#contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
                </div>
                <div className="col-xl-4 col-lg-6 offset-xl-5 offset-lg-2 col-md-6">
                  <div className="header-logo-right clearfix text-right">
                    <div className="call-us">
                      <div className="login-btn">
                      <Link to="/login"><i className="fas fa-user"> </i> LOGIN</Link>
                    </div>
                    </div>
                    {/* <div className="login-btn">
                      <Link to="#"><i className="fas fa-user"> </i> SIGN UP</Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header End	 */}
      </div>
    )
  }
}

export default Header;
