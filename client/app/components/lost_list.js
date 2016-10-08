import React from 'react';
import {getLossItem} from '../request';

export default class Lost_list extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[]
    };
  }

  componentDidMount(){
    getLossItem((itemsarray)=>{
      this.setState({items:itemsarray});
    });
  }

  render() {
    return (
      <div className="eshop-section section">
  	    	<div className="container">
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
