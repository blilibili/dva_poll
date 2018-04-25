import {Button } from 'antd'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import React from 'react';
import PollAddChild from '../components/PollAddPage/PollAddChild'

class PollAdd extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <PollAddChild />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.poll;
}
export default connect(mapStateToProps)(PollAdd);
