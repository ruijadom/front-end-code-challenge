import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Drag from './../Drag';
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
    const { name, type, isLast } = this.props;
    return (
      <div className={classnames('legend-item', isLast && 'last')}>
        <div className="legend-header">
          <div className="legend-drag">
            <Drag />
          </div>
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
  isLast: PropTypes.bool.isRequired,
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
