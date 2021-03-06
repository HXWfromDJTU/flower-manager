import React from 'react'
import RealtimeTable from '@/components/RealtimeTable' // 引入表格
import { Route, Switch } from 'react-router-dom'
import '@/style/realtimeTrade.less' // 引入realtimeTrade样式  
import axios from '@/http';
class RealtimeTrade extends React.Component {
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
                    <Route path={'/index' + index}>
                        <RealtimeTable marketData={typeData} key={index}></RealtimeTable>
                    </Route>
                )
            })
        )
    }
}

export default RealtimeTrade