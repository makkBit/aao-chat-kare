import React, { Component } from 'react';
import './chatMessage.less';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';
export default class chatMessage extends Component {
  showMsg(msg, i) {
    return <div className="message" key={i}>
      <Comment
        // actions={actions}
        author={<h4>{localStorage.getItem('username')}</h4>}
        avatar={
          <Avatar style={{ color: '#fff', backgroundColor: '#1f2324' }}>
            {localStorage.getItem('username')[0]}
          </Avatar>
        }
        content={
          <p>
            {msg}
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    </div>
  }
  showEchoMsg(msg, i) {
    return <div className="message" key={i}>
      <Comment
        // actions={actions}
        author={<h4>Reply</h4>}
        avatar={
          <Avatar style={{ color: '#fff', backgroundColor: '#1f2324' }}>
            W.S.
          </Avatar>
        }
        content={
          <p>
            {msg}
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    </div>
  }
  render() {
    const { chatHistory } = this.props;
    return <div className="component-chat-message">
      {chatHistory.length > 0 && chatHistory.map((msg, index) => {
        return (((index+1) % 2) !== 0) ? this.showMsg(msg, index) : this.showEchoMsg(msg, index)
      })}
    </div>
  }
}