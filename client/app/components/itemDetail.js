import React from 'react';

export default class ItemsDetail extends React.Component {
  render() {
    return (
      <div>
        <center>
        <div className="row shop-item">
          <div className="col-md-7 shop-item-image">
            <img src={this.props.item.pic} alt="Item Name"/>
          </div>
          <div className="col-md-5">
            <h4>Post user: {this.props.item.post_user.fullName}</h4>
            <h4>found location: {this.props.item.found_location}</h4>
            <h4>found location: {this.props.item.current_location}</h4>
          </div>
        </div>
        </center>
      </div>
    )
  }
}
