import React, { Component } from 'react';


// Components
 import Navbar from '../components/Navbar/Navbar';
 import HeroBanner from '../components/HeroBanner/HeroBanner';
 import Footer from '../components/Footer/Footer';

 class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeroBanner />
        <Footer />
      </div>
    )
  }
}

export default Home;
