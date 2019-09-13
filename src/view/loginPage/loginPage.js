import React, { Component } from 'react';
import './loginPage.less';
import { Form, Icon, Input, Button } from 'antd';
class loginPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem("token", values.password);
        localStorage.setItem("username", values.username)
        this.props.history.push("/home");
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

const LoginPageForm = Form.create({ name: 'normal_login' })(loginPage);

export default LoginPageForm;