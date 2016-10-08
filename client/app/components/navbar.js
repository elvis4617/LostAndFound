import React from 'react';
import {Link} from 'react-router'
import

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
<<<<<<< HEAD
                    <li>

                    </li>

                    <li>
                      <a className = "dropdown-toggle" data-toggle = "dropdown" href = "#">
                        <span className = "glyphicon glyphicon-bell"></span>
                        <span className = "badge">3</span>
                      </a>

                      <ul className = "dropdown-menu">
                        <li><a href = "#">Test Notification 1</a></li>
                        <li><a href = "#">Test Notification 2</a></li>
                        <li><a href = "#">Test Notification 3</a></li>
                      </ul>
                    </li>

                    <li className ="nav-icon">
                      <a className = "dropdown-toggle" data-toggle = "dropdown" href = "#">
                        <span className = "glyphicon glyphicon-envelope"></span>
                        <span className = "badge">2</span>
                      </a>
                      <ul className = "dropdown-menu">
                        <li><a href = "#">Test Message 1</a></li>
                        <li><a href = "#">Test Message 2</a></li>
                      </ul>
                    </li>

                    <li className ="nav-icon">
                      <a className = "dropdown-toggle" data-toggle = "dropdown" href = "#">
                        <img width = "20px" className = "img-rounded" src = "img/testProfilePic.jpg"/>
                      </a>
                      <ul className = "dropdown-menu">
                        <li><a href = "account.html">View Profile</a></li>
                        <li><a href = "#">Log Out</a></li>
                      </ul>
=======
                    <li className="page-scroll">
                        <a id="menu-text-color3" className="menu-text-color" href="#found">Login</a>
>>>>>>> d0a4450226b6d85c9a2d7e04f9098a162f38379d
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
  }
}
