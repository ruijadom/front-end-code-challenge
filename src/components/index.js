import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LegendList from './legend-list/index';

import './style.scss';

class Legend extends PureComponent {
  static propTypes = {
    expanded: PropTypes.bool,
    sortable: PropTypes.bool,
    children: PropTypes.node,
    maxWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    collapsable: PropTypes.bool,
    onChangeOrder: PropTypes.func
  };

  static defaultProps = {
    expanded: true,
    sortable: true,
    children: [],
    maxWidth: null,
    maxHeight: null,
    collapsable: true,
    onChangeOrder: id => console.info(id)
  };

  constructor(props) {
    super(props);

    const { expanded } = props;
    this.state = { expanded };
  }

  handleVisibility = val => {
    this.setState({ expanded: val });
  };

  render() {
    return (
      <div className="app">
        <div className="legend-wrapper">
          <LegendList></LegendList>
        </div>
      </div>
    );
  }
}

export default Legend;
