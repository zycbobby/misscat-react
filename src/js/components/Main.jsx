import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';

import Comment from './Comment.jsx';
import Blog from './Blog.jsx';

import LoginStore from '../stores/LoginStore.js';
import BlogStore  from  '../stores/BlogStore.js';
import BlogUtil from '../utils/BlogApiUtil.js';


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
    BlogUtil.getAllBlogs(msg=> { console.log(msg)});

  },

  componentWillUnmount() {
    Blog.removeChangeListener(this._onChange);
  },

  _onChange() {
    let { blogs } = BlogStore.getAll();
    console.log(blogs);
    this.blogs = blogs;
    this.setState({});
  },

  render() {
    return (
      <div className="mui-app-content-canvas">
        <div className="full-width-section">
          <Comment></Comment>
        </div>
        <ul>
           {this.blogs.map(blog => <Blog blog={blog}> </Blog>)}
        </ul>

    </div>
    );
  }
});


module.exports = Main;
