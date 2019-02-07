import React, { Component } from 'react';
import logo from './logo.svg';

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Projects from "./components/projects/Projects";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
