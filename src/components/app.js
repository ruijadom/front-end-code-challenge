import React from 'react';
import PropTypes from 'prop-types';
const legendsData = require('./data').data;
import Spinner from './common/Spinner';
import LegendList from './Legend/Legend';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      legends: legendsData
    };
  }

  componentDidMount() {
    if (!this.state || this.state.length === 0) {
      console.log('Loading legends failed');
    } else {
      // show loading spinner if there is no data to show
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <>
            <LegendList legends={this.state.legends}></LegendList>
          </>
        )}
      </>
    );
  }
}

export default App;
