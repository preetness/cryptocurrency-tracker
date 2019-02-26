import React, { Component } from 'react';
import CoinDetails from './CoinDetails';

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
      <div>
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
