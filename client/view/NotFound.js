

import React from 'react'
import '@/style/notFound.less' // 引入realtimeTrade样式  
import Logo from './Logo';
class NotFound extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        flowersData: []
    }

    render() {
        return (
            <div className="notFound">
                <div className="wrapper">
                    <span className="number">404</span>
                    <span className="text">心里的花...不知跑去哪</span>
                    <Logo></Logo>
                </div>
            </div>
        )
    }
}

export default NotFound