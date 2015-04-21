import React from 'react';
import mui from 'material-ui';

import Comment from './Comment.jsx';
import BlogAction from '../actions/BlogActionCreator.js';

let {TextField, RaisedButton, Snackbar, Paper, FlatButton} = mui;

let Blog = React.createClass({
  getInitialState() {
    return {
      showComment : false
    };
  },

  componentDidMount() {

  },

  _dateComponent(date) {
    if (date instanceof Date) {
      var _date = date;
    } else {
      var _date = new Date(date);
    }
    return (
      <div className="mui-font-style-caption">{_date.getFullYear()} - {_date.getMonth() + 1} - { _date.getDate() }</div>
    );
  },

  _listCommentComponent() {
    if (this.state.showComment) {
      let comments = this.props.blog.comments;
      return (
        <div>

          <div>
          {comments.map(comment => { return this._oneCommentComponent(comment)})}
          </div>
          <Comment onSubmit={this._sendNewComment}/>
        </div>
      );
    }
  },

  _oneCommentComponent(comment) {
    return (
      <div key={comment.createdAt}>
      {this._dateComponent(comment.createdAt)}
      {comment.text}
      </div>
    );
  },

  _ToggleComments() {
    this.setState(function(prev, currentProp) {
      return { showComment : !prev.showComment}
    });
  },

  _sendNewComment(comment, cb) {
    BlogAction
      .sendNewComment(this.props.blog, {
        text : comment.text,
        createdAt : Date.now()
      },  msg=> { console.log(msg)})
      .done(cb);

  },

  render() {
    return (
      <div className="full-width-section">
        <Paper className="blog-paper" zDepth={0}>
            {this._dateComponent(this.props.blog.createdAt)}
            <div className="mui-font-style-title">{this.props.blog.text}</div>
            <FlatButton label="Reply" className="mui-font-style-caption form-item-right" onClick={this._ToggleComments}></FlatButton>
            {this._listCommentComponent()}
        </Paper>
      </div>
    );
  }
});

module.exports = Blog;
