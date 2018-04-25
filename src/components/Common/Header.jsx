import { Row , Col } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import React from 'react';
import style from './Header.css';

class Header extends React.Component{
  render(){
    return(
      <div className={style["header-section"]}>
        <Row className={style["header-menu"]}>
          <Col span={4}>Daniel</Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.calendar;
}


export default connect(mapStateToProps)(Header);
