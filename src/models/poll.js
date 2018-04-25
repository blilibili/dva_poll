
export default {

  namespace: 'poll',

  state: {  // 状态
    table:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // 监听路由触发动作
    },
  },

  effects: {
    *getMyPoll({ payload }, { call, put }) {  // actions
      yield put({
        type: 'requestGetPoll' ,
        payload,
      });
    },
  },

  reducers: {
    requestGetPoll(state, action) {
      action.payload.forEach((v , k) => {
        state.table.push(v);
      })
      return { ...state, ...action.payload };
    },
  },

};
