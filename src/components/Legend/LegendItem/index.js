import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from './../Toolbar';

import './styles.scss';

const TIMELINE = 'timeline';
const GRADIENT = 'gradient';
const CHOROPLETH = 'choropleth';
const BASIC = 'basic';

class LegendItem extends Component {
  state = {
    isOpen: true
  };

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  renderContent(type) {
    switch (type) {
      case BASIC:
        return <div>basic</div>;
      case TIMELINE:
        return <div>timeline</div>;
      case GRADIENT:
        return <div>gradient</div>;
      case CHOROPLETH:
        return <div>choropleth</div>;
      default:
        return null;
    }
  }

  render() {
    const { name, type } = this.props;
    return (
      <div className="legend-item">
        <div className="legend-header">
          <div className="legend-title">{name}</div>
          <div className="legend-toolbar-wrapper">
            <Toolbar onChangeCollapse={this.toggleOpen} />
          </div>
        </div>
        <div>{this.renderContent(type)}</div>
      </div>
    );
  }
}

LegendItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default LegendItem;
