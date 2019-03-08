import React, { Component } from 'react';
import './App.css';
import CoinList from './CoinList';
import axios from 'axios';

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
      });
  }
  render() {
    const { coinName, prices } = this.state;
    return (
      <div className="ui container box">
        <h2 className="ui header title">
          <i className="bitcoin icon" />
          <div className="content title">Cryptocurrency Tracker</div>
        </h2>

        <div className="ui section divider" />
        <section className="icons">
          <button className="ui primary basic icon button">
            <i className="bitcoin icon" />
            BitCoin
          </button>
          <button className="ui primary basic icon button">
            <i className="ethereum icon" />
            Ethereum
          </button>
          <button className="ui primary basic icon button">
            <i className="btc icon" />
            BitCoin Cash
          </button>
        </section>
        {prices.length === 0 ? (
          <div className="ui segment">
            <div className="ui active inverted dimmer">
              <div className="ui text loader">Loading</div>
            </div>
            <p />
          </div>
        ) : (
          <h3 className="current-price">
            {coinName} Current Price: ${prices[prices.length - 1].close} USD
          </h3>
        )}
        <h3 className="thirty-day-price">30 Day Price Chart:</h3>
        <CoinList name={this.state.coinName} prices={this.state.prices} />
      </div>
    );
  }
}

export default App;
