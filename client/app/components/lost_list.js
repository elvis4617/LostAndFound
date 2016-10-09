import React from 'react';
import {getLossItem} from '../request.js';
import ItemsDetail from './itemDetail.js';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

export default class Lost_list extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[]
    };
  }

  componentDidMount(){
    getLossItem((itemsarray)=>{
      console.log("aaaaaaaaa");
      this.setState({items:itemsarray});
    });
  }

  render() {
    return (
      <div className="eshop-section section">
  	    	<div className="container">
            <div className="row">
              {this.state.items.map((item)=>{
                return <ItemsDetail key={item._id} item={item} />
              })}
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
