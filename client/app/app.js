import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Navbar from './components/navbar.js';
import Body from './components/body.js'
import Footer from './components/footer.js'
import Sample from './components/sample.js';
import Lost_list from './components/lost_list.js';
import Lost_header from './components/lost_header.js';

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
        <Lost_header/>
        <Lost_list/>
        <Footer/>
      </div>
    );
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
      <Route path="/landing" component={Landing} />
      <Route path="/Lost_page" component={Lost_page} />
    </Route>
  </Router>
),document.getElementById('mybody'));
