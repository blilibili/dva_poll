import {Button } from 'antd'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import React from 'react';
import Header from '../Common/Header'
import PollBody from './PollBody'

class PollIndex extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <PollBody />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.calendar;
}
export default connect(mapStateToProps)(PollIndex);
