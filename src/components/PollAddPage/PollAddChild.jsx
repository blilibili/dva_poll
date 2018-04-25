import {Form , Button  , Input ,Icon } from 'antd'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import React from 'react';
import Header from '../Common/Header'
import style from './PollAddChild.css'
const FormItem = Form.Item;
let uuid = 0;
class PollAddChild extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };
  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    if(uuid > 7){
      alert('最多可设置八个问题');
      return false;
    }else{
      uuid++;
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys,
      });
    }
  }
  constructor(props){
    super(props);
  }
  render(){
    const formItemLayout = {

    };
    const formItemLayoutWithOutLabel = {

    };
    const { getFieldDecorator , getFieldValue } = this.props.form;
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          required={false}
          key={k}
        >
          {getFieldDecorator(`poll-title[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "请填写问卷内容",
            }],
          })(
            <div style={{display:'inline-block'}}>
              <span style={{marginRight:'20px'}}>{'问卷 ' + (index+1) + ':'}</span>
              <Input placeholder="请填写问卷名称" style={{ width: '55%', marginRight: 8 }} />
            </div>
          )}
          {getFieldDecorator(`poll-que[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "请填写问卷内容",
            }],
          })(
            <div style={{display:'inline-block',width:'50%'}}>
              <Input placeholder="逗号分隔选项 最多设置四个" style={{ width: '100%', marginRight: 8 }} />
            </div>
          )}
          {keys.length > 1 ? (
            <Icon
              style={{float:'right' , top:'13px' , position:'relative'}}
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      );
    });
    return (
      <div>
        <Header />
        <div className={style["form-section"]}>
          <Form
            onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请填写问卷名' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请填写问卷名" />
              )}
            </FormItem>

            {formItems}

            <FormItem {...formItemLayoutWithOutLabel}>
              <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                <Icon type="plus" /> Add field
              </Button>
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                提交
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.poll;
}
const WrappedNormalPollForm = Form.create()(PollAddChild);

export default connect(mapStateToProps)(WrappedNormalPollForm);
