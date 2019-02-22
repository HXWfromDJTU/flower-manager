import React from 'react'
import { Layout, Menu, Icon, Button } from 'antd'
const SubMenu = Menu.SubMenu;

class Index extends React.Component {
    state = {
        collapsed: false
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            menu: [
                { title: '实时行情' },
                {
                    title: '鲜花管理',
                    link: 'www.baidu.com',
                    subMenu: [
                        {
                            title: '订单管理',
                            link: 'www.163.com'
                        }, {
                            title: '花艺师管理',
                            link: 'www.163.com'
                        }, {
                            title: '用户设置',
                            link: 'www.163.com'
                        }, {
                            title: '退出系统',
                            link: 'www.163.com'
                        },

                    ]
                }
            ]
        })
    }

    render() {
        // 设置Sider的minHeight可以使左右自适应对齐
        return (
            <div id='sidebar'>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
                    theme='dark'
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>实时行情</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>鲜花管理</span></span>}>
                        <Menu.Item key="5">订单管理</Menu.Item>
                        <Menu.Item key="6">花艺师管理</Menu.Item>
                        <Menu.Item key="7">用户管设置</Menu.Item>
                        <Menu.Item key="8">退出系统</Menu.Item>
                    </SubMenu>
                </Menu>
            </div >
        )
    }
}

export default Index