import React, { Component } from 'react';
import './chatFooter.less'
import { Comment, Avatar } from 'antd';
import Editor from "components/editor";

export default class chatFooter extends Component {

  render() {

    const { submitting, value, inputMsg } = this.props;

    return <div className="component-chat-footer">
      <Comment
        avatar={
          <Avatar style={{ color: '#fff', backgroundColor: '#1f2324' }}>
            {localStorage.getItem('username')[0]}
          </Avatar>
        }
        content={
          <Editor
            onChange={this.props.onChange}
            onSubmit={this.props.handleSubmit}
            submitting={submitting}
            value={inputMsg}
          />
        }
      />
    </div>;
  }
}