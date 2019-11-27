import React from 'react';
import './styles/App.css';
import { Route, Switch, withRouter } from "react-router";
import i18n from "./utils/i18n";
import { connect } from "react-redux";
import Error from "./views/Error";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path={"/"} component={i18n.wrap(Home)} />
          <Route exact path={"/error"} component={i18n.wrap(Error)} />
      </Switch>
    </div>
  );
}

export { App };

export default withRouter(
    connect(
        state => ({}),
        dispatch => ({})
    )(App)
);
