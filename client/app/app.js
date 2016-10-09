import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Navbar from './components/navbar.js';
import Body from './components/body.js'
import Footer from './components/footer.js'
import Lost_list from './components/lost_list.js';
import Lost_header from './components/lost_header.js';
import Login_page from './components/login.js';
import Register_page from './components/register.js';
import Report_page from './components/modal.js';
import Claim_page from './components/claim_items.js';

class Claims extends React.Component{
  render(){
    return(
      <div>
        <Claim_page/>
        <Footer/>
      </div>
    );
  }
}

class Report extends React.Component {
  render() {
    return (
      <Report_page />
    );
  }
}

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


class Register extends React.Component {
  render(){
    return(
      <div>
        <Register_page/>
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
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/Landing" component={Landing}/>
      <Route path="/Report" component={Report} />
      <Route path="/Lost_page" component={Lost_page} />
      <Route path="/Login" components={Login}/>
      <Route path="/Register" components={Register}/>
      <Route path="/Claims" components={Claims}/>
    </Route>
  </Router>
),document.getElementById('mybody'));
