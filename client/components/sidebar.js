import React from 'react'
import { Layout, Menu, Icon, Button } from 'antd'
const SubMenu = Menu.SubMenu;
import '@/style/components/sidebar.less' // 引入sidebar样式
class Sidebar extends React.Component {
    state = {
        collapsed: false,
        menu: [
            {
                title: '实时行情',
                link: 'www.baidu.com'
            },
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
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        return (
            <Menu
                defaultSelectedKeys={['0']}
                defaultOpenKeys={['1']}
                mode="inline"
                inlineCollapsed={this.state.collapsed}
                theme='dark'
                className='sidebar'
            >
                {
                    this.state.menu.map((menu, index) => {
                        if (menu.subMenu) {
                            // 渲染有子菜单的menu
                            return (
                                <SubMenu key={index} title={<span><Icon type="mail" /><span>{menu.title}</span></span>}>
                                    {
                                        menu.subMenu.map((subMenu, index) => {
                                            return (
                                                <Menu.Item key={index + Math.random()}>{subMenu.title}</Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        } else {
                            // 渲染无子菜单的menu
                            return (
                                <Menu.Item key={index}>
                                    <Icon type="pie-chart" />
                                    <span>{menu.title}</span>
                                </Menu.Item>
                            )
                        }

                    })
                }
            </Menu>
        )
    }
}

export default Sidebar