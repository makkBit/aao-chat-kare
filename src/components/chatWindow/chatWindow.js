import React, {Component} from 'react';
import './chatWindow.less'

export default class chatWindow extends Component {
  render() {
    return <div className="component-chat-window">
      {this.props.children}
    </div>;
  }
}