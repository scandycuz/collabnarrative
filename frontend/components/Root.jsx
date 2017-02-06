import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';

import AppContainer from './AppContainer';
import Home from './home/Home';

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
