import React from 'react';
import {Link} from 'react-router'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <Link to={'/Landing'}>
                  <span id="menu-text-color0" className="navbar-brand menu-text-color">Umass Lost & Found</span>
                </Link>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li className="page-scroll">
                      <Link to={'/Landing'}>
                        <span id="menu-text-color1">Reports</span>
                      </Link>
                    </li>
                    <li className="page-scroll menu-text-color">
                          <Link to={'/Lost_page'}>
                            <span id="menu-text-color2">Losses</span>
                          </Link>
                    </li>
                    <li className="page-scroll">
                        <Link to={'/Login'}>
                          <span id="menu-text-color3">Login</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
  }
}
