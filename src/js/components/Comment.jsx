import React from 'react';
import mui from 'material-ui';

let {TextField, RaisedButton, Snackbar} = mui;


let Comment = React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    let style = {
      paddingBottom : '50px'
    };

    return (
      <div style={style}>
        <textarea className="form-item form-textarea mui-font-style-body-2" ></textarea>
        <RaisedButton className="submit-btn" label="Submit" secondary={true}></RaisedButton>
      </div>
    );
  }
});

module.exports = Comment;
