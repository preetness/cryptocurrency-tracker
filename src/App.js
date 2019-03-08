import React, { Component } from 'react';
import './App.css';
import CoinList from './CoinList';
import axios from 'axios';

class App extends Component {
  state = {
    coinName: null,
    prices: [],
    closingPrice: null
  };

  API_KEY = '4b45d9be07f3f088f9eb659db5f76df3df85bc6f8834fcf8cdd809317158077a';

  componentDidMount() {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&api_key=${
          this.API_KEY
        }`
      )
      .then(response => {
        this.setState({
          coinName: 'BitCoin',
          prices: response.data.Data
        });
      });
  }

  getCoin(coin) {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD&api_key=${
          this.API_KEY
        }`
      )
      .then(response => {
        this.setState({
          coinName: coin,
          closingPrice: response.data.USD
        });
      });
    axios
      .get(
        `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&api_key=${
          this.API_KEY
        }`
      )
      .then(response => {
        this.setState({
          coinName: coin,
          prices: response.data.Data
        });
      });
  }

  render() {
    const { coinName, prices, closingPrice } = this.state;
    return (
      <div className="ui container">
        <h2 className="ui header title">
          <i className="bitcoin icon" />
          <div className="content title">Cryptocurrency Tracker</div>
        </h2>

        <div className="ui section divider" />
        <section className="icons">
          <button
            onClick={() => this.getCoin('BTC')}
            className="ui primary basic icon button"
          >
            <i className="bitcoin icon" />
            BitCoin
          </button>
          <button
            onClick={() => this.getCoin('ETH')}
            className="ui primary basic icon button"
          >
            <i className="ethereum icon" />
            Ethereum
          </button>

          <button
            onClick={() => this.getCoin('BCH')}
            className="ui primary basic icon button"
          >
            <i className="btc icon" />
            BitCoin Cash
          </button>
        </section>
        {closingPrice === null ? (
          <h3 className="select-currency">Select a currency</h3>
        ) : (
          <h3 className="current-price">
            {coinName} Current Price: ${closingPrice} USD
          </h3>
        )}
        <h3 className="thirty-day-price">30 Day Price Chart:</h3>
        <CoinList name={this.state.coinName} prices={this.state.prices} />
      </div>
    );
  }
}

export default App;
