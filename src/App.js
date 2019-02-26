import React, { Component } from 'react';
import CoinDetails from './CoinDetails';
import './App.css';

class App extends Component {
  state = {
    coinName: null,
    price: null,
    annualLow: null,
    annualHigh: null
  };

  render() {
    const { coinName, price, annualLow, annualHigh } = this.state;
    return (
      <div className="ui container box">
        <h2 className="ui header title">
          <i className="bitcoin icon" />
          <div className="content title">Cryptocurrency Tracker</div>
        </h2>
        <CoinDetails
          coin={coinName}
          price={price}
          low={annualLow}
          high={annualHigh}
        />
      </div>
    );
  }
}

export default App;
