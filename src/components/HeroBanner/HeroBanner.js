import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  image1  from '../../assets/img/slider/image1.png'
import  bannerImage  from '../../assets/img/slider/bannerImage.jpg'




 class Herobanner extends Component {
  render() {
    return (
      <div>
         {/* Hero Slider Section */}
      <section className="hero-banner" id="heroSlideActive">
        <div className="single-banner-wrap">
          <div className="single-banner" style={{ backgroundImage:`url(${bannerImage})` }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="banner-text fs-16 lh-28">
                    <h1 className="fs-45 lh-60 m-b-45" data-animation="fadeInUp" data-delay=".4s">Take on any challenge of <br />the Gullfoss <span className="theme-color">Business World</span></h1>
                    <p data-animation="fadeInUp" data-delay=".6s">There are many variations passa thges Various versions When you need a kickst no time for coding for your website have evolved over years sometimes.</p>
                    <div className="slider-btns m-t-65">
                      <Link href="#" className="boxed-btn m-r-30" data-animation="fadeInUp" data-delay=".8s">VIEW MORE</Link>
                      <Link href="#" className="boxed-btn boxed-btn-white" data-animation="fadeInUp" data-delay=".8s">GET STARTED</Link>
                    </div>
                  </div>
                </div>
                <div className="banner-img">
                   <img src={image1} alt="image1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="single-banner-wrap">
          <div className="single-banner" style={{backgroundImage: 'url(assets/img/slider/02.jpg)'}}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="banner-text text-center fs-16 lh-28">
                    <h1 className="fs-45 lh-60 m-b-45" data-animation="fadeInUp" data-delay=".4s">Take on any challenge of <br />the Gullfoss <span className="theme-color">Business World</span></h1>
                    <p data-animation="fadeInUp" data-delay=".6s">There are many variations passa thges Various versions When you need a kickst no time for coding for your website have evolved over years sometimes.</p>
                    <div className="slider-btns m-t-65">
                      <Link href="#" className="boxed-btn m-r-30" data-animation="fadeInUp" data-delay=".8s">VIEW MORE</Link>
                      <Link href="#" className="boxed-btn boxed-btn-white" data-animation="fadeInUp" data-delay=".8s">GET STARTED</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-banner-wrap">
          <div className="single-banner another-shape" style={{backgroundImage: 'url(assets/img/slider/03.jpg)'}}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="banner-text fs-16 lh-28">
                    <h1 className="fs-45 lh-60 m-b-45" data-animation="fadeInUp" data-delay=".4s">Take on any challenge of <br />the Gullfoss <span className="theme-color">Business World</span></h1>
                    <p data-animation="fadeInUp" data-delay=".6s">There are many variations passa thges Various versions When you need a kickst no time for coding for your website have evolved over years sometimes.</p>
                    <div className="slider-btns m-t-65">
                      <Link href="#" className="boxed-btn m-r-30" data-animation="fadeInUp" data-delay=".8s">VIEW MORE</Link>
                      <Link href="#" className="boxed-btn boxed-btn-white" data-animation="fadeInUp" data-delay=".8s">GET STARTED</Link>
                    </div>
                  </div>
                </div>
                <div className="banner-img">
                  <img src="assets/img/slider/02-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* Hero Slider Section End*/}
      </div>
    )
  }
}


export default Herobanner;
