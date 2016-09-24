import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Hello, testing!!!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('mybody'));
