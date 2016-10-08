import React from 'react';

export default class ItemsDetail extends React.Component {
  render() {
    return (
      <div>
        <div className="shop-item">
          <div className="shop-item-image">
            <a href="page-product-details.html"><img src={this.props.item.pic} alt="Item Name"/></a>
          </div>
          <div className="title">
            <h3><a href="page-product-details.html">Post user: {this.props.item.post_user.fullName}</a></h3>
            <h3><a href="page-product-details.html">found location: {this.props.item.found_location}</a></h3>
          </div>
        </div>
      </div>
    )
  }
}
