import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';
import Description from './Description.jsx';
import LoginAction from '../actions/LoginActionCreator.js';
import LoginStore from '../stores/LoginStore.js';

let {TextField, RaisedButton, Snackbar} = mui;

let Login = React.createClass({

  mixins: [Router.State],

  getInitialState() {
    return {

    };
  },

  componentDidMount() {
    LoginStore.addChangeListener(this._onLogin);
  },

  componentWillUnmount() {
    LoginStore.removeChangeListener(this._onLogin);
  },

  _login(e) {
    e.preventDefault();
    LoginAction.updateLogin({
      userName : '',
      password : this.refs.pwd.getValue()
    });
  },

  _onLogin() {
    if (LoginStore.getLoginState().isLogin) {
      this.refs.pwd.setErrorText("");
      this.context.router.transitionTo('main', {}, {target: this.context.router.getCurrentQuery().target});
    } else {
      this.refs.loginError.show();
      this.refs.pwd.setErrorText("Password is not correct");
    }
  },

  render() {
    return (
    <div className="mui-app-content-canvas">
      <div className="full-width-section">
        <Description />

        <form>
          <TextField
            className="form-item"
            hintText="Disabled Hint Text"
            disabled={true}
            floatingLabelText="LukiWu" />

          <TextField
            ref="pwd"
            type="password"
            className="form-item"
            hintText="Please enter password"
            floatingLabelText="Password" />

          <RaisedButton
            className="form-item"
            label="Login"
            secondary={true}
            onClick={this._login} ></RaisedButton>
        </form>

        <Snackbar
          ref="loginError"
          message="Fail to login"/>

      </div>
    </div>
    );
  }
});

module.exports = Login;
