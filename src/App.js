import React, { Component } from 'react';
import './App.css';
import CoinDetails from './CoinDetails';
import CoinList from './CoinList';
import axios from 'axios';
import * as V from 'victory';

class App extends Component {
  state = {
    coinName: null,
    prices: [],
    annualLow: null,
    annualHigh: null,
    crypto: []
  };

  componentDidMount() {
    const API_KEY =
      '4b45d9be07f3f088f9eb659db5f76df3df85bc6f8834fcf8cdd809317158077a';
    axios
      .get(
        `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&api_key=${API_KEY}`
      )
      .then(response => {
        this.setState({
          coinName: 'BitCoin',
          prices: response.data.Data
        });
        console.log(this.state.price);
      });
  }
  render() {
    return (
      <div className="ui container box">
        <h2 className="ui header title">
          <i className="bitcoin icon" />
          <div className="content title">Cryptocurrency Tracker</div>
        </h2>
        <div className="ui section divider" />
        <CoinList name={this.state.coinName} prices={this.state.prices} />
      </div>
    );
  }
}

export default App;
