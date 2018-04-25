import {Button } from 'antd'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import React from 'react';
import PollIndexChild from '../components/PollIndexPage/PollIndex'

class PollIndex extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return(
      <div>
        <PollIndexChild />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.calendar;
}
export default connect(mapStateToProps)(PollIndex);
