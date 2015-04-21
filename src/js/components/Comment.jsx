import React from 'react';
import mui from 'material-ui';

let {TextField, RaisedButton, Snackbar} = mui;


let Comment = React.createClass({
  getInitialState() {
    return {

    };
  },

  componentDidMount() {
  },

  _onClick(e) {
    let commentContent = this.refs.commentContent.getDOMNode().value;
    let that = this;
    if (this.props.onSubmit) {
      this.props.onSubmit({
        text : commentContent,
        images : []
      }, function(){
        that.refs.commentContent.getDOMNode().value = "";
      });
    }
  },

  render() {
    return (

      <div className="full-width-section full-width-section-with-submit-btn" >
        <textarea ref="commentContent" className="form-item-fullwidth mui-font-style-body-2" ></textarea>
        <RaisedButton className="form-item-right" label="Submit" secondary={true} onClick={this._onClick}></RaisedButton>
      </div>
    );
  }
});

module.exports = Comment;
