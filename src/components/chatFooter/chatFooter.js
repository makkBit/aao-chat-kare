import React, { Component } from 'react';
import './chatFooter.less'
import { Comment, Avatar } from 'antd';
import Editor from "components/editor";

export default class chatFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      submitting: false,
      value: '',
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };


  render() {

    const { submitting, value } = this.state;

    return <div className="component-chat-footer">
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <Editor
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </div>;
  }
}