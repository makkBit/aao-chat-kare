import React, { Component } from 'react';
import './loginPage.less';
import { Form, Icon, Input, Button, message } from 'antd';
import { connect } from "react-redux";

class loginPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem('token', values.password);
        localStorage.setItem('userrname', values.username)
        // if the currently logging user isn't the previous logged user
        if(values.username !== this.props.username) {
          this.props.resetChatHistory(null, true);
        }
        this.props.setActiveUser(values.username);
        message.success("Login Successfull");
        this.props.history.push('/home');
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="view-login-page">
        <div className="">
          <h1>Hello!</h1>
          <h3>Sign in with us</h3>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return { 
    username: user.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetChatHistory: (data, reset) => dispatch({ 
      type: 'UPDATE_CHAT_HISTORY',
      data,
      reset
    }),
    setActiveUser: (data) => dispatch({
      type: 'SET_ACTIVE_USER',
      data
    })
  }
}

const loginPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginPage);

export default Form.create({ name: 'normal_login' })(loginPageConnect);