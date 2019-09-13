import React, {Component} from 'react';
import './homePage.less';
import { Button, Icon, Tooltip } from 'antd';
import ChatWindow from 'components/chatWindow';
import ChatHeader from 'components/chatHeader';
import ChatMessage from 'components/chatMessage';
import ChatFooter from 'components/chatFooter';
import { wsUri } from 'utils/constant';

export default class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
      chatHistory: [],
      submitting: false,
      inputMsg: ''
    }
    this.webSocketInstance = null;
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
  onWsOpen = (evt) => {
    console.log(evt);
    if(evt) {
      this.setState({
        online: true
      });
    }
  }
  onWsClose = (evt) => {
    console.log(evt);
    if(evt) {
      this.setState({
        online: false
      });
    }
  }
  onWsMessageRcv = (evt) => {
    console.log(evt);
    if(evt.data) {
      this.setState(prevState => ({
        chatHistory: [...prevState.chatHistory, evt.data],
        inputMsg: ""
      }));
    }
  }
  onWsError = (evt) => {
    console.log(evt);
    // handleNotification
    if(evt) {
      console.log(evt);
      this.setState({
        online: false
      })
    }
  }
  sendMsg = () => {
    if(this.webSocketInstance.readyState === 1 && this.state.inputMsg.trim().length > 0) {
      this.setState(prevState => ({
        chatHistory: [...prevState.chatHistory, this.state.inputMsg],
      }));
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
  render() {
    return <div className="view-home-page">
      <div className="container">

        <ChatWindow >
          <ChatHeader />
          <ChatMessage 
            chatHistory={this.state.chatHistory}
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