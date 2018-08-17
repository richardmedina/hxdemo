import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Provider } from 'react-redux';
import store from './store';

import logo from './logo.svg';
import './App.css';

// Components
import Header from './Components/Header'
import Content from './Components/Content'
// ActionCreators
import { addToUsers, removeFromUsers } from './ActionCreators/Users'

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



//export default connect (mapStateToProps, mapDispatchToProps) (App);
export default App;
