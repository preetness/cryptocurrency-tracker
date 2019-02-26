import React, { Component } from 'react';
import { VictoryChart, VictoryTheme, VictoryLine } from 'victory';

class CoinDetails extends Component {
  render() {
    return (
      <div>
        Prices for BitCoin in the past month:{' '}
        {this.props.prices.map(price => {
          return <li key={price.time}>{price.close}</li>;
        })}
      </div>
    );
  }
}

export default CoinDetails;
