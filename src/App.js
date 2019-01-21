import React, { Component } from 'react';
import { Provider } from 'mini-lake'
import logo from './logo.svg';
import './App.css';

import { initialState, actions } from './store'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Provider initialState={initialState} actions={actions}>
            <Counter />
          </Provider>
        </header>
      </div>
    );
  }
}

export default App;
