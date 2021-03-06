

import React from 'react'
import RealtimeTable from '@/components/RealtimeTable' // 引入表格
import { Route, Switch } from 'react-router-dom'
import '@/style/realtimeTrade.less' // 引入realtimeTrade样式  
import axios from '@/http';
class FloristManage extends React.Component {
    constructor(props) {
        super(props)
        this.getTradeMessage()
    }
    state = {
        flowersData: []
    }
    getTradeMessage() {
        axios.get('/api').then(res => {
            let data = res.data;
            this.setState({
                flowersData: data
            })
        })
    }

    render() {
        return (
            this.state.flowersData.map((typeData, index) => {
                return (
                    <div>这里是花艺师管理页面</div>
                )
            })
        )
    }
}

export default FloristManage