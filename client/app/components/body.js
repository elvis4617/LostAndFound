import React from 'react';
import {Link} from 'react-router'

export default class Body extends React.Component {
  render() {
    return (
      <header>
        <div className="container" id="body">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-responsive" src="img/profile.png" alt=""/>
                    <div className="intro-text">
                        <span className="name">Umass Found a Lost</span>
                        <hr className="star-light"/>
                        <span className="skills">A wedsite using for lost and found locally</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
  }
}
