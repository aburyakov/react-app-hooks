import React from 'react';

import './App.css';
import HomaPage from './pages/HomePage/HomePage';
import SearchResaltPage from './pages/SearchResaltPage/SearchResaltPage';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/home" component={HomaPage} />
      <Route path="/searchResult" component={SearchResaltPage} />
      <Route path="/" exact component={HomaPage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default withRouter(App);
