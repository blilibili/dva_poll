import {Table , Button } from 'antd'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import React from 'react';
import Header from '../Common/Header'

class PollBody extends React.Component{
  constructor(props){
    super(props);
    this.props.dispatch({
      type: 'poll/getMyPoll',
      payload: [
        {
        name:'问卷调查测试1',
        timestamp: '2018-04-23',
        number:3,
        key:'1'
        },
        {
          name:'问卷调查测试2',
          timestamp: '2018-04-24',
          number:12,
          key:'2'
        }
      ]
    });
    this.state = {
      dataSource:props.table,
      columns:[{
        title: '问卷名称',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '题目数量',
        dataIndex: 'number',
        key: 'number',
      }, {
        title: '创建时间',
        dataIndex: 'timestamp',
        key: 'timestamp',
      }, {
          title: '操作',
          key: 'action',
          render: (text, record) => (
              <span>
                <Button type='primary' size='small'>编辑</Button>
                <Button type="danger" size='small' style={{marginLeft:'20px'}}>删除</Button>
              </span>
          )
      }
      ]
    }
  }
  render(){
    return(
      <div>
        <div style={{padding:"20px"}}>
          <Button>新增问卷调查</Button>
        </div>
        <Table dataSource={this.state.dataSource} columns={this.state.columns} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.poll;
}
export default connect(mapStateToProps)(PollBody);
