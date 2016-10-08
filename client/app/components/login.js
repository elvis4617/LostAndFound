import React from 'react';
import {Link} from 'react-router'

export default class Login_page extends React.Component {
  render() {
    return (
      <div className="section" id="login-section">
	    	<div className="container">
				<div className="row">
					<div className="col-sm-5">
						<div className="basic-login">
							<form role="form" role="form">
								<div className="form-group">
		        				 	<label role="login-username"><i className="icon-user"></i> <b>Username or Email</b></label>
									<input className="form-control" id="login-username" type="text" placeholder=""/>
								</div>
								<div className="form-group">
		        				 	<label role="login-password"><i className="icon-lock"></i> <b>Password</b></label>
									<input className="form-control" id="login-password" type="password" placeholder=""/>
								</div>
								<div className="form-group" >
                  <div id="remember-checkbox">
									  <label className="checkbox">
										  <input type="checkbox"/> Remember me
									  </label>
                  </div>
									<a href="page-password-reset.html" className="forgot-password">Forgot password?</a>
									<button type="submit" className="btn pull-right">Login</button>
									<div className="clearfix"></div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-sm-7 social-login">
						<p>Or login with your Facebook or Twitter</p>
						<div className="social-login-buttons">
							<a href="#" className="btn-facebook-login">Login with Facebook</a>
							<a href="#" className="btn-twitter-login">Login with Twitter</a>
						</div>
						<div className="clearfix"></div>
						<div className="not-member">
							<p>Not a member? <Link to={'/Register'}>Register here</Link></p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}
