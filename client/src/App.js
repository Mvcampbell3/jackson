import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

// Components
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <Router>
        <Header />


      </Router>
    );
  }
}

export default App;
