import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/app.scss';
import { ROOT } from "./constants/general";
import Header from "./components/shared/Header";
import { ABOUT, HOME, POST_DETAIL } from "./constants/route-paths";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import PostDetailPage from "./components/pages/PostDetailPage";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={ true } path={ HOME } component={ HomePage } />
        <Route exact={ true } path={ ABOUT } component={ AboutPage } />
        <Route exact={ true } path={ POST_DETAIL } component={ PostDetailPage } />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById(ROOT));

