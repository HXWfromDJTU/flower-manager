import React from 'react'
import { Layout, Menu, Icon, Button } from 'antd'
const SubMenu = Menu.SubMenu;
const { Sider, Header, Content, Footer } = Layout
import Sidebar from '../components/sidebar';
import RealtimeTrade from '../view/RealtimeTrade'
import { Route, Switch } from 'react-router-dom'
class Index extends React.Component {
  state = {
    collapsed: false,
    style: {
      layout: {
        minHeight: '100vh'
      },
      header: {
        color: 'white'
      }
    }
  }


  render() {
    // 设置Sider的minHeight可以使左右自适应对齐
    return (
      <div id='page'>
        <Layout style={this.state.style.layout}>
          <Header className='header'>
            {/* <img src='/public/img/logo.jpeg'></img> */}
            ON 蜗牛花艺交易系统
          </Header>
          <Sider>
            <Sidebar ></Sidebar>
          </Sider>
          <Layout>

            <Content className='content'>
              <RealtimeTrade></RealtimeTrade>
            </Content>
            <Footer className='footer'>🐌 Powered by ON Studio Copy-right 2017 -2019</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Index