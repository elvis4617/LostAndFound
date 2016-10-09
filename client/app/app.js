import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Navbar from './components/navbar.js';
import Body from './components/body.js'
import Footer from './components/footer.js'
import Lost_list from './components/lost_list.js';
import Lost_header from './components/lost_header.js';
import Login_page from './components/login.js';
import Register_page from './components/register.js';
import Report_page from './components/modal.js';
import Claim_page from './components/claim_items.js';
import {getLossItem, searchLossItem} from './request.js';
import ItemsDetail from './components/itemDetail.js';

class Claims extends React.Component{
  render(){
    return(
      <div>
        <Claim_page/>
        <Footer/>
      </div>
    );
  }
}

class Report extends React.Component {
  render() {
    return (
      <Report_page />
    );
  }
}

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Body />
        <Footer />
      </div>
    );
  }
}

class Lost_page extends React.Component {
  render() {
    return (
      <div>
        <Lost_list/>
        <Footer/>
      </div>
    );
  }
}

class Login extends React.Component {
  render(){
    return(
      <div>
        <Login_page/>
        <Footer/>
      </div>
    )
  }
}


class Register extends React.Component {
  render(){
    return(
      <div>
        <Register_page/>
        <Footer/>
      </div>
    )
  }
}



class SearchResultsPage extends React.Component {
  getSearchTerm() {
    var queryVars = this.props.location.query;
    var searchTerm = "";
    if (queryVars && queryVars.q) {
      searchTerm = queryVars.q;
      searchTerm.trim();
    }
    return searchTerm;
  }
  render() {
    var searchTerm = this.getSearchTerm();
    return (
      <SearchResults key={searchTerm} user={"000000000000000000000004"} searchTerm={searchTerm} />
    );
  }
}

class SearchResults extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      search:""
    };
  }

  componentDidMount(){
    var searchTerm = this.props.searchTerm;
    searchLossItem(searchTerm, (itemsarray)=>{
      this.setState({items:itemsarray});
    });
  }

  render() {
    return (
      <div className="eshop-section section" id="body">
  	    	<div className="container">




            <div className="row">
              {this.state.items.map((item)=>{
                return <ItemsDetail key={item._id} item={item} />
              })}
            </div>







  				<div className="row">
  					<div className="col-md-3 col-sm-6">

  						<div className="shop-item">

  							<div className="shop-item-image">
  								<a href="page-product-details.html"><img src="img/product1.jpg" alt="Item Name"/></a>
  							</div>

  							<div className="title">
  								<h3><a href="page-product-details.html">Lorem ipsum dolor</a></h3>
  							</div>

  							<div className="actions">
  								<a href="page-product-details.html" className="btn btn-small"><i className="icon-shopping-cart icon-white"></i> Details</a>
  							</div>
  						</div>

  					</div>
  					<div className="col-md-3 col-sm-6">
  						<div className="shop-item">
  							<div className="shop-item-image">
  								<a href="page-product-details.html"><img src="img/product2.jpg" alt="Item Name"/></a>
  							</div>
  							<div className="title">
  								<h3><a href="page-product-details.html">Lorem ipsum dolor</a></h3>
  							</div>
  							<div className="actions">
  								<a href="page-product-details.html" className="btn btn-small"><i className="icon-shopping-cart icon-white"></i> Details</a>
  							</div>
  						</div>
  					</div>
  					<div className="col-md-3 col-sm-6">
  						<div className="shop-item">
  							<div className="shop-item-image">
  								<a href="page-product-details.html"><img src="img/product3.jpg" alt="Item Name"/></a>
  							</div>
  							<div className="title">
  								<h3><a href="page-product-details.html">Lorem ipsum dolor</a></h3>
  							</div>

  							<div className="actions">
  								<a href="page-product-details.html" className="btn btn-small"><i className="icon-shopping-cart icon-white"></i> Details</a>
  							</div>
  						</div>
  					</div>
  					<div className="col-md-3 col-sm-6">
  						<div className="shop-item">
  							<div className="shop-item-image">
  								<a href="page-product-details.html"><img src="img/product4.jpg" alt="Item Name"/></a>
  							</div>
  							<div className="title">
  								<h3><a href="page-product-details.html">Lorem ipsum dolor</a></h3>
  							</div>

  							<div className="actions">
  								<a href="page-product-details.html" className="btn btn-small"><i className="icon-shopping-cart icon-white"></i> Details</a>
  							</div>
  						</div>
  					</div>
  				</div>
  				<div className="row">
  					<div className="col-md-3 col-sm-6">
  						<div className="shop-item">
  							<div className="shop-item-image">
  								<a href="page-product-details.html"><img src="img/product5.jpg" alt="Item Name"/></a>
  							</div>
  							<div className="title">
  								<h3><a href="page-product-details.html">Lorem ipsum dolor</a></h3>
  							</div>

  							<div className="actions">
  								<a href="page-product-details.html" className="btn btn-small"><i className="icon-shopping-cart icon-white"></i> Details</a>
  							</div>
  						</div>
  					</div>
  					<div className="col-md-3 col-sm-6">
  						<div className="shop-item">
  							<div className="shop-item-image">
  								<a href="page-product-details.html"><img src="img/product6.jpg" alt="Item Name"/></a>
  							</div>
  							<div className="title">
  								<h3><a href="page-product-details.html">Lorem ipsum dolor</a></h3>
  							</div>

  							<div className="actions">
  								<a href="page-product-details.html" className="btn btn-small"><i className="icon-shopping-cart icon-white"></i> Details</a>
  							</div>
  						</div>
  					</div>
  					<div className="col-md-3 col-sm-6">
  						<div className="shop-item">
  							<div className="shop-item-image">
  								<a href="page-product-details.html"><img src="img/product7.jpg" alt="Item Name"/></a>
  							</div>
  							<div className="title">
  								<h3><a href="page-product-details.html">Lorem ipsum dolor</a></h3>
  							</div>

  							<div className="actions">
  								<a href="page-product-details.html" className="btn btn-small"><i className="icon-shopping-cart icon-white"></i> Details</a>
  							</div>
  						</div>
  					</div>
  					<div className="col-md-3 col-sm-6">
  						<div className="shop-item">
  							<div className="shop-item-image">
  								<a href="page-product-details.html"><img src="img/product8.jpg" alt="Item Name"/></a>
  							</div>
  							<div className="title">
  								<h3><a href="page-product-details.html">Lorem ipsum dolor</a></h3>
  							</div>

  							<div className="actions">
  								<a href="page-product-details.html" className="btn btn-small"><i className="icon-shopping-cart icon-white"></i> Details</a>
  							</div>
  						</div>
  					</div>
  				</div>
  				<div className="pagination-wrapper ">
  					<ul className="pagination pagination-lg">
  						<li className="disabled"><a href="#">Previous</a></li>
  						<li className="active"><a href="#">1</a></li>
  						<li><a href="#">2</a></li>
  						<li><a href="#">3</a></li>
  						<li><a href="#">4</a></li>
  						<li><a href="#">5</a></li>
  						<li><a href="#">6</a></li>
  						<li><a href="#">7</a></li>
  						<li><a href="#">8</a></li>
  						<li><a href="#">9</a></li>
  						<li><a href="#">10</a></li>
  						<li><a href="#">Next</a></li>
  					</ul>
  				</div>
  			</div>
  	    </div>
    )
  }
}

class App extends React.Component {
  render() {
    var queryVars = this.props.location.query;
    var searchTerm = null;
    if (queryVars && queryVars.searchTerm) {
      searchTerm = queryVars.searchTerm;
    }
    return (
      <div>
        <Navbar searchTerm={searchTerm}/>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/Landing" component={Landing}/>
      <Route path="/Report" component={Report} />
      <Route path="searchresult" component={SearchResultsPage} />
      <Route path="/Login" components={Login}/>
      <Route path="/Lost_page" components={Lost_page}/>
      <Route path="/Register" components={Register}/>
      <Route path="/Claims" components={Claims}/>
    </Route>
  </Router>
),document.getElementById('mybody'));
