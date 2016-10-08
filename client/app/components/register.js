import React from 'react';
import {Link} from 'react-router'

export default class Register_page extends React.Component {
  render() {
    return (
      <div className="section" id="register-section">
	    	<div className="container">
  				<div className="row">
  					<div className="col-sm-5">
  						<div className="basic-login">
  							<form role="form">
  								<div className="form-group">
  		        				 	<label role="register-username"><i className="icon-user"></i> <b>Email</b></label>
  									<input className="form-control" id="register-username" type="text" placeholder=""/>
  								</div>
  								<div className="form-group">
  		        				 	<label role="register-password"><i className="icon-lock"></i> <b>Password</b></label>
  									<input className="form-control" id="register-password" type="password" placeholder=""/>
  								</div>
  								<div className="form-group">
  		        				 	<label role="register-password2"><i className="icon-lock"></i> <b>Re-enter Password</b></label>
  									<input className="form-control" id="register-password2" type="password" placeholder=""/>
  								</div>
  								<div className="form-group">
  									<button type="submit" className="btn pull-right">Register</button>
  									<div className="clearfix"></div>
  								</div>
  							</form>
  						</div>
  					</div>
  					<div className="col-sm-6 col-sm-offset-1 social-login">
  						<p>You can use your Facebook or Twitter for registration</p>
  						<div className="social-login-buttons">
  							<a href="#" className="btn-facebook-login">Use Facebook</a>
  							<a href="#" className="btn-twitter-login">Use Twitter</a>
  						</div>
  					</div>
  				</div>
	      </div>
		  </div>
    )
  }
}
