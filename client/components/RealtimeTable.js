import React from 'react'
import { Table, Divider, Tag, Button } from 'antd' // 引入表格   
const { Column, ColumnGroup } = Table; // 引入表格子类组件
import '@/style/components/realtimeTable.less' // 引入sidebar样式  

class RealtimeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            mapper: {
                'name': '名称',
                'color': '颜色',
                'volum': '单位',
                'classA_price': 'A级别价格',
                'classB_price': 'B级别价格',
                'classC_price': 'C级别价格',
                'trend': '走势'
            }
        }
        this.state.tableData = this.props.marketData;
    }
    render() {
        return (
            <Table
                className='realtimeTable'
                title={_ => this.state.tableData.title}
                dataSource={this.state.tableData.data}
                key={Math.random().toFixed(2)}
                bordered={true}
                rowKey={Math.random().toFixed(4)}
            >
                {
                    Object.keys(this.state.mapper).map((item, index) => {
                        return (
                            <Column
                                title={this.state.mapper[item]}
                                dataIndex={item}
                                key={Math.random().toFixed(4)}
                            />
                        )
                    })
                }
                < Column
                    title='操作'
                    key='action'
                    render={(text, record) => (
                        <span>
                            <Button type="primary">采购</Button>
                            {/* <Divider type="vertical" />
                                    <Button type="primary">Primary</Button> */}
                        </span>
                    )}
                />
                }
                    </Table>
        )
    }
    componentWillReceiveProps(nextProps) {
        const { data } = this.state;
        this.setState({
            tableData: nextProps.marketData,
        })
        console.log(nextProps)
    }
}

export default RealtimeTable