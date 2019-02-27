import React, { Component } from 'react';
import CoinDetails from './CoinDetails';

class CoinList extends Component {
  render() {
    return (
      <div>
        <CoinDetails name={this.props.name} prices={this.props.prices} />
      </div>
    );
  }
}

export default CoinList;
