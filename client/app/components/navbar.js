import React from 'react';
import {Link} from 'react-router'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: props.searchTerm
    };
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSearchButtonClick(e) {
    e.preventDefault();
    this.search();
  }

  search() {
    var trimmedTerm = "";
    if(this.state.searchTerm !== null)
      trimmedTerm = this.state.searchTerm.trim();
    if (trimmedTerm !== "") {
      this.context.router.push({ pathname: "/searchresult", query: { q: trimmedTerm } });
    }
    this.setState({
      searchTerm:''
    });
  }

  componentWillReceiveProps(newProps) {
  if (newProps.searchTerm !== null) {
    this.setState({
      searchTerm: newProps.searchTerm
    });
  }
}


  render() {
    return (
      <div>
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <Link to={'/Landing'}>
                  <span id="menu-text-color0" className="navbar-brand menu-text-color">Umass Found a Lost</span>
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="menu">
                <form className= "navbar-form navbar-left" role ="search">
                  <div className= "input-group">
                    <input type ="text" className= "form-control" placeholder="Search A Lost" onChange={(e)=>this.handleChange(e)}/>
                      <span className= "input-group-btn">
                        <button type = "button" className= "btn btn-default" onClick={(e)=>this.handleSearchButtonClick(e)}>
                          <span className= "glyphicon glyphicon-search"></span>
                        </button>
                      </span>
                  </div>
                </form>

                <div className="nav navbar-nav navbar-right">
                <ul className="list-inline" id="menuList">
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
                    <li className="page-scroll menu-text-color">
                          <Link to={'/Claims'}>
                            <span id="menu-text-color2">Claims</span>
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
        </div>
    </nav>

    <div className="modal fade" id="modal-content-1" role="dialog">
      <div className="modal-dialog">

        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">Join Us Now! <small>Someone</small></h4>
          </div>
          <div className="modal-body">
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet blandit maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec convallis erat a ante porta vehicula. Vivamus maximus justo non purus tempor consequat. Mauris eleifend lorem dui. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In pellentesque commodo elementum. In id maximus lectus, sit amet ornare nibh. Aliquam tristique, nunc ac imperdiet rutrum, urna ex consectetur mi, in dapibus orci quam in diam. Nam vel arcu a diam facilisis lacinia nec vitae diam. Curabitur tincidunt ipsum et nunc placerat, at cursus mauris bibendum. Nam mi leo, pharetra in felis sit amet, aliquet viverra dolor. Nunc pharetra dignissim risus.
            </p>
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

Navbar.contextTypes = {
  router: React.PropTypes.object.isRequired
};
