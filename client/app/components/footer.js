import React from 'react';
import {Link} from 'react-router'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="text-center">
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        Copyright &copy; Your Website 2016
                    </div>
                </div>
            </div>
        </div>
      </footer>
    )
  }
}
