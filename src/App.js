import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Header from './Components/Header'
import Content from './Components/Content'


class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="app">
        <Header title="This is my header" />
        <Content body={children} />
      </div>
    );
  }
}

export default App;
