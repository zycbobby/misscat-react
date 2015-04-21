import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';

import Comment from './Comment.jsx';
import Blog from './Blog.jsx';

import LoginStore from '../stores/LoginStore.js';
import BlogAction from '../actions/BlogActionCreator.js';
import BlogStore  from  '../stores/BlogStore.js';


let {TextField} = mui;

let Main = React.createClass({

  blogs : [],

  mixins: [Router.State],

  getInitialState() {
    return {};
  },

  componentWillMount() {
    if (!LoginStore.getLoginState().isLogin) {
      // disable this line for debug now
      // this.context.router.transitionTo('login', {}, {target: this.context.router.getCurrentQuery().target});
    }
  },

  componentDidMount() {
    BlogStore.addChangeListener(this._onChange);

    // initialize data
    BlogAction.receiveAll(msg=> { console.log(msg)});
  },

  componentWillUnmount() {
    BlogStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    let { blogs } = BlogStore.getAll();
    this.blogs = blogs;
    this.setState({});
  },

  _sendNewBlog(blog, cb) {
    BlogAction
      .sendNewBlog(blog, msg=> { console.log(msg)})
      .done(cb);
  },

  render() {
    return (
      <div className="mui-app-content-canvas">
        <div className="full-width-section">
          <Comment onSubmit={this._sendNewBlog}></Comment>
        </div>
        <ul>
           {this.blogs.map((blog,i) => <Blog key={i} blog={blog}> </Blog>)}
        </ul>

    </div>
    );
  }
});


module.exports = Main;
