import React, {Component} from 'react';
import './homePage.less';
import { Button, Icon, Tooltip } from 'antd';
import ChatWindow from 'components/chatWindow';
import ChatHeader from 'components/chatHeader';
import ChatMessage from 'components/chatMessage';
import ChatFooter from 'components/chatFooter';

export default class homePage extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/");
  }
  render() {
    return <div className="view-home-page">
      <div className="container">

        <ChatWindow >
          <ChatHeader />
          <ChatMessage />
          <ChatFooter />
        </ChatWindow>

        <Tooltip 
          placement="topRight" 
          title={"Logout"} 
          className="logout-btn"
          onClick={this.handleLogout}>
            <Button type="primary">
              <Icon type="logout" />
            </Button>
        </Tooltip>

      </div>
    </div>;
  }
}