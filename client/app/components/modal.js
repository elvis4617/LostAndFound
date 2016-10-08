import React from 'react';
import {Link} from 'react-router'

export default class Footer extends React.Component {
  render() {
    return (
      <div>
      <span className="pull-right"><a href="#" >Accepted</a> · <a href="#" >Peace Out</a> · <a type="button" data-toggle="modal" data-target="#modal-content-1">Details</a> · 20 hrs</span>
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
