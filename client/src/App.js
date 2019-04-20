import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


// Components
import Header from "./components/Header";
import Home from "./components/Home";
import SeaMonsterArea from "./components/SeaMonsterArea";

import ErrorPage from "./components/ErrorPage"

class App extends Component {

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/seamonster" exact component={SeaMonsterArea}/>
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
