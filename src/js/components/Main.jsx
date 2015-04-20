import React from 'react';
import mui from 'material-ui';

let {TextField} = mui;

let Main = React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {

  },

  componentWillUnmount() {

  },

  render() {
    return (
      <div className="mui-app-content-canvas">
        <div className="full-width-section">
          <textarea className="form-item form-textarea mui-font-style-body-2" ></textarea>
        </div>
      </div>
    );
  }
});

module.exports = Main;
