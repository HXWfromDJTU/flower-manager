

import React from 'react'
import '@/style/logo.less' // 引入realtimeTrade样式  
class Logo extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        flowersData: []
    }

    render() {
        return (
            <div className="logo">
                <span>🐌 蜗牛花艺 - 生活 艺术 鲜花</span>
            </div>
        )
    }
}

export default Logo