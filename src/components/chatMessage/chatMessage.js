import React, {Component} from 'react';
import './chatMessage.less';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
export default class chatMessage extends Component {
  render() {
    return <div className="component-chat-message">
      <Comment
        // actions={actions}
        author={<h4>Han Solo</h4>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently.
          </p>
        }
        // datetime={
          // <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          //   <span>{moment().fromNow()}</span>
          // </Tooltip>
        // }
      />
    </div>
  }
}