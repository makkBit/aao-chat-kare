import React, {Component} from 'react';
import './homePage.less';
import { Button, Icon, Tooltip } from 'antd';
import ChatWindow from 'components/chatWindow';
import ChatHeader from 'components/chatHeader';
import ChatMessage from 'components/chatMessage';
import ChatFooter from 'components/chatFooter';
import { wsUri } from 'utils/constant';
import { connect } from "react-redux";

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
      submitting: false,
      inputMsg: ''
    }
    this.webSocketInstance = null;
    this.onWsOpen = this.onWsOpen.bind(this);
    this.onWsClose = this.onWsClose.bind(this);
    this.onWsMessageRcv = this.onWsMessageRcv.bind(this);
    this.onWsError = this.onWsError.bind(this);
  }
  handleInputChange = e => {
    this.setState({
      inputMsg: e.target.value,
    });
  };
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/");
  }
  onWsOpen(evt) {
    if(evt) {
      this.setState({
        online: true
      });
    }
  }
  onWsClose(evt) {
    if(evt) {
      this.setState({
        online: false
      });
    }
  }
  onWsMessageRcv(evt) {
    this.props.updateChatHistory(evt.data);
    if(evt.data) {
      this.setState({
        inputMsg: ""
      });
    }
  }
  onWsError(evt){
    if(evt) {
      this.setState({
        online: false
      })
    }
  }
  sendMsg = () => {
    if(this.webSocketInstance.readyState === 1 && this.state.inputMsg.trim().length > 0) {
      this.props.updateChatHistory(this.state.inputMsg);
      this.webSocketInstance.send(this.state.inputMsg);
    }
  }
  componentDidMount() {
    this.webSocketInstance = new WebSocket(wsUri);
    this.webSocketInstance.addEventListener('open', this.onWsOpen);
    this.webSocketInstance.addEventListener('close', this.onWsClose);
    this.webSocketInstance.addEventListener('message', this.onWsMessageRcv);
    this.webSocketInstance.addEventListener('error', this.onWsError);
  }
  componentWillUnmount() {
    this.webSocketInstance.removeEventListener('open', this.onWsOpen);
    this.webSocketInstance.removeEventListener('close', this.onWsClose);
    this.webSocketInstance.removeEventListener('message', this.onWsMessageRcv);
    this.webSocketInstance.removeEventListener('error', this.onWsError);
  }
  render() {
    return <div className="view-home-page">
      <div className="container">

        <ChatWindow >
          <ChatHeader 
            online={this.state.online}
          />
          <ChatMessage 
            chatHistory={this.props.chatHistory}
          />
          <ChatFooter 
            inputMsg={this.state.inputMsg}
            onChange={this.handleInputChange}
            handleSubmit={this.sendMsg}
            submitting={this.state.submitting}
          />
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

const mapStateToProps = state => {
  const { chat } = state;
  return { 
    chatHistory: chat.chatHistory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateChatHistory: (data) => dispatch({ 
      type: 'UPDATE_CHAT_HISTORY', 
      data 
    }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(homePage);