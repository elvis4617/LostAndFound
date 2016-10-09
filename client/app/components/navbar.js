import React from 'react';
import {Link} from 'react-router'

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <Link to={'/Landing'}>
                  <span id="menu-text-color0" className="navbar-brand menu-text-color">Umass Found a Lost</span>
                </Link>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li className="page-scroll">
                      <a type="button" data-toggle="modal" data-target="#modal-content-1" id="menu-text-color1">Report</a>
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

    <div className="modal fade" id="modal-content-1" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">Report Items</h4>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group" id="categoryinput">
                <label for="InputItemCategory">Item Category</label>
                <input type="category" className="form-control" id="InputItemCategory" placeholder="category here" />
              </div>
              <div className="form-group" id="colorinput">
                <label for="InputItemColor">Item Color</label>
                <input type="color" className="form-control" id="InputItemColor" placeholder="color here"/>
              </div>
              <div className="form-group" id="descriptioninput">
                <label for="InputItemDescription">Item Description</label>
                <textarea className="form-control" id="InputItemDescription" rows="3"></textarea>
              </div>
              <div className="form-group" id="picturenput">
                <label for="exampleInputFile">Item Picture</label>
                <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }
}
