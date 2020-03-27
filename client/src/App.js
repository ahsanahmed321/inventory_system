import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Container/Dashboard/Dashboard";
import Add from "./Container/Add/Add";
import Search from "./Container/Search/Search";
import Capital from "./Container/Capital/Capital";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUSer } from "./Store/actions/authActions";
import store from "./Store/store";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decode = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUSer(decode));
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/capital" component={Capital} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
