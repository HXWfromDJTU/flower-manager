import React from 'react'
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd';
import '@/style/login.less'
import Logo from './Logo'
class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="loginBox">
          <Card
            title="登录"
            extra={<a href="#">注册</a>}
            style={{ width: 350 }}
          >
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="蜗牛号/花艺师平台号" />
              </Form.Item>
              <Form.Item>
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  <a href="/index">现在登录</a>
                </Button>
              </Form.Item>
            </Form>
            <Logo></Logo>
          </Card>
        </div>
      </div>

    )
  }
}

export default Login