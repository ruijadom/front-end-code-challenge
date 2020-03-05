import React, { Component } from 'react';
import Spinner from '../Common/Spinner/Spinner';
import LegendItem from './LegendItem';
import './styles.scss';

class Legend extends Component {
  state = {
    isLoading: true,
    legends: []
  };

  async componentDidMount() {
    await import('../data')
      .then(data => {
        this.setState({ legends: data.default, isLoading: false });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { legends, isLoading } = this.state;
    return isLoading ? (
      <Spinner />
    ) : (
      <div className="app">
        <div className="legend-wrapper">
          {legends.map(({ id, ...rest }) => (
            <LegendItem key={id} {...rest} />
          ))}
        </div>
      </div>
    );
  }
}

export default Legend;
