import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container'
//The GreetingContainer will be rendered all the time because it is a header
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>TravelSmart</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <Route path="/login" component={SessionFormContainer}></Route>
      <Route path="/signup" component={SessionFormContainer}></Route>
    </Switch>
  </div>
);

export default App;
