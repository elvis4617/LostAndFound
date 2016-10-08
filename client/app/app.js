import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Navbar from './components/navbar.js';
<<<<<<< HEAD
import Header from './components/header.js';
=======
import Body from './components/body.js'
import Footer from './components/footer.js'
>>>>>>> d0a4450226b6d85c9a2d7e04f9098a162f38379d
import Sample from './components/sample.js';
import Lost_list from './components/lost_list.js';
import Lost_header from './components/lost_header.js';
import Login_page from './components/login.js'

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Body />
        <Footer />
      </div>
    );
  }
}

class Lost_page extends React.Component {
  render() {
    return (
      <div>
        <Lost_list/>
        <Footer/>
      </div>
    );
  }
}

class Login extends React.Component {
  render(){
    return(
      <div>
        <Login_page/>
        <Footer/>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        {this.props.children}
<<<<<<< HEAD
        <Header/>
=======

>>>>>>> d0a4450226b6d85c9a2d7e04f9098a162f38379d
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/landing" component={Landing} />
      <Route path="/Lost_page" component={Lost_page} />
      <Route path="/Login" components={Login}/>
    </Route>
  </Router>
),document.getElementById('mybody'));
