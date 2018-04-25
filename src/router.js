import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Canvas from './routes/Canvas';
import PollIndex from './routes/PollIndex'
import PollAdd from './routes/PollAdd'

function RouterConfig({ history, text }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={PollIndex} />
        <Route path="/add/poll" component={PollAdd} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
