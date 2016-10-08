import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Navbar from './components/navbar.js';
import Sample from './components/sample.js';
import Sample2 from './components/sample2.js';

class sample extends React.Component {
  render() {
    return (
      <div>
        <Sample/>
      </div>
    );
  }
}

class sample2 extends React.Component {
  render() {
    return (
      <div>
        <Sample2/>
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
      <IndexRoute component={sample} />
      <Route path="/sample2" component={sample2} />
    </Route>
  </Router>
),document.getElementById('mybody'));
