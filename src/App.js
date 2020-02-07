import React, { Component} from 'react';
import '../src/assets/css/custom.css';
import '../src/assets/css/responsive-1.0.css';
import '../src/assets/css/helper.css';
import '../src/assets/css/magnific-popup.css';
import '../src/assets/css/slick-1.9.0.css';
import '../src/assets/css/all.min.css';
import '../src/assets/css/animate.min.css';
import '../src/assets/css/bootstrap-4.3.min.css'
 import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from './pages/Home'
import Login from './pages/Login/Login';
// import Signup from './pages/Signup/signup';
import fire from '../src/config/Fire';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  // componentDidMount(){
  //   this.authListiner();
  // }

  // authListiner() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if(user) {
  //       this.setState({ user });
  //     } else {
  //       this.setState({ user: null });
  //     }
  //   });
  // }
  render() {
    return (
      <div className="App">
    {this.state.user ? (<Home />) : (<Login/>)}

    <Router>
     <Switch>
      <Route path="/signup"></Route>
      </Switch>
    </Router>
      </div>
    )
  }
}

export default App;
