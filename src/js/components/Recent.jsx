import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';

import Comment from './Comment.jsx';
import Blog from './Blog.jsx';

import LoginStore from '../stores/LoginStore.js';
import BlogAction from '../actions/BlogActionCreator.js';
import CommentStore from '../stores/CommentStore.js';

import DateMixin from '../utils/DateMixin.js';

let {Paper} = mui;

let Recent = React.createClass({
  mixins: [Router.State, DateMixin],

  getInitialState() {
    return {
      comments : []
    };
  },

  componentWillMount() {
    if (!LoginStore.getLoginState().isLogin) {
      // disable this line for debug now
      this.context.router.transitionTo('login', {}, {target: this.context.router.getCurrentQuery().target});
    }
  },

  componentDidMount() {
    CommentStore.addChangeListener(this._onChange);
    BlogAction.getRecentComments(msg=> { console.log(msg)});
  },


  componentWillUnmount() {
    CommentStore.removeChangeListener(this._onChange);
  },


  _onChange() {
    let {comments} = CommentStore.getAll();

    this.setState({
        comments : comments
      });
  },

  _getComment(comment, i) {
    return (
      <Paper className="blog-paper" zDepth={0}>
                  {this.DateComponent(comment.createdAt)}
            <div className="mui-font-style-title">{comment.text}</div>
      </Paper>
    );
  },

  render() {
    return (
      <div className="full-width-section">
        {this.state.comments.map((comment,i) => this._getComment(comment.comments, i))}
      </div>
    );
  }
});

module.exports = Recent;
