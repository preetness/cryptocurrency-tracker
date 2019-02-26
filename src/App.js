import React, { Component } from 'react';
import './App.css';
import CoinDetails from './CoinDetails';
import CoinList from './CoinList';
import * as V from 'victory';

class App extends Component {
  render() {
    return (
      <div className="ui container box">
        <h2 className="ui header title">
          <i className="bitcoin icon" />
          <div className="content title">Cryptocurrency Tracker</div>
        </h2>
        <div className="ui section divider" />
        <CoinList />
      </div>
    );
  }
}

export default App;
