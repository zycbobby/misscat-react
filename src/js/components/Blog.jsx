import React from 'react';
import mui from 'material-ui';

let {TextField, RaisedButton, Snackbar} = mui;

let Blog = React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <div className="full-width-section">
        <p>{this.props.blog.text}</p>
      </div>

    );
  }
});

module.exports = Blog;
