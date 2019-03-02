import React from 'react'
import { Layout, Menu, Icon, Button } from 'antd'
const SubMenu = Menu.SubMenu;
import { Router, Route, NavLink } from 'react-router-dom'
import '@/style/components/sidebar.less' // 引入sidebar样式
class Sidebar extends React.Component {
    state = {
        collapsed: false,
        menu: [
            {
                title: '实时行情',
                link: '/index'
            },
            {
                title: '鲜花管理',
                link: '/',
                subMenu: [
                    {
                        title: '订单管理',
                        link: '/orderManage'
                    }, {
                        title: '花艺师管理',
                        link: '/foristManage'
                    }, {
                        title: '用户设置',
                        link: '/userSetting'
                    }, {
                        title: '退出系统',
                        link: '/logout'
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
    /**
     * 模块切换
     */
    junpTo = (item, key, keyPath) => {
        console.log(item, key, keyPath)
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
                onClick={this.junpTo}
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
                                                <Menu.Item key={index}>
                                                    <NavLink to={subMenu.link}>{subMenu.title}</NavLink>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        } else {
                            // 渲染无子菜单的menu
                            return (
                                <Menu.Item key={index} >
                                    <Icon type="pie-chart" />
                                    <NavLink to={menu.link}>{menu.title}</NavLink>
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