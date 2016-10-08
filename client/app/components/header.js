import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="glyphicon glyphicon-home"></span>
          </a>
          <form className="navbar-form navbar-left" role="search">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search"/>
              <span className="input-group-btn">
                <button type="submit" className="btn btn-default">
                  <span className="glyphicon glyphicon-search">
                  </span>
                </button>
              </span>
            </div>
          </form>
          <div className="btn-group pull-right" role="group" aria-label="...">
            <Link to={'/sample2'}><button type="button" className="btn btn-default navbar-btn">
              first button
            </button></Link>
          </div>
        </div>
      </nav>
    </div>
    )
  }
}
