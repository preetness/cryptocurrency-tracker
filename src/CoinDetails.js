import React, { Component } from 'react';
import { VictoryChart, VictoryTheme, VictoryLine } from 'victory';

class CoinDetails extends Component {
  render() {
    const { prices } = this.props;
    return (
      <div>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            style={{ data: { stroke: 'red' } }}
            data={prices}
            x={0}
            y="close"
          />
        </VictoryChart>
      </div>
    );
  }
}

export default CoinDetails;
