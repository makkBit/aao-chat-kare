import React, {Component} from 'react';
import './chatHeader.less';
import { Badge } from 'antd';
export default class chatHeader extends Component {
  render() {
    return <div className="component-chat-header">
      <Badge 
        status={this.props.online === true ? "success" : "error"}
        text={this.props.online === true ? "Online" : "Offline"}
      />
      <h3>What's on your mind ?</h3>
    </div>;
  }
}