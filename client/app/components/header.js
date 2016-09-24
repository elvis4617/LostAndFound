import React from 'react';

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
            <button type="button" className="btn btn-default navbar-btn">
              first button
            </button>
            <button type="button" className="btn btn-default navbar-btn">
              second button
            </button>
            <button type="button" className="btn btn-default navbar-btn">
              third button
            </button>
          </div>
        </div>
      </nav>
    </div>
    )
  }
}
