import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Drag from './../Drag';
import Toolbar from './../Toolbar';
import { TypeBasic, TypeTimeline, TypeGradient, TypeCloropleth } from '../LegendItemTypes';
import './styles.scss';

const BASIC = 'basic';
const CHOROPLETH = 'choropleth';
const GRADIENT = 'gradient';
const TIMELINE = 'timeline';

class LegendItem extends Component {
  state = {
    isVisible: true,
    isOpen: true
  };

  showInfo = () => {};

  toogleVisibility = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  renderContent() {
    const { type, items, timeline } = this.props;

    switch (type) {
      case BASIC:
        return <TypeBasic items={items} />;
      case CHOROPLETH:
        return <TypeCloropleth items={items} />;
      case GRADIENT:
        return <TypeGradient items={items} />;
      case TIMELINE:
        return <TypeTimeline timeline={timeline} />;
      default:
        return null;
    }
  }

  render() {
    const { name, type, isLast } = this.props;
    const { isOpen, isVisible } = this.state;

    return (
      <div className={classnames('legend-item', isLast && 'last')}>
        <div className="legend-header">
          <div className="legend-drag">
            <Drag />
          </div>
          <div className="legend-title">{name}</div>
          <Toolbar
            onChangeVisibility={this.toogleVisibility}
            onChangeInfo={this.showInfo}
            onChangeCollapse={this.toggleOpen}
            isOpen={isOpen}
            isVisible={isVisible}
          />
        </div>

        <div className={classnames('legend-content', isOpen && 'open')}>
          {this.renderContent(type)}
        </div>
      </div>
    );
  }
}

LegendItem.propTypes = {
  isLast: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      name: PropTypes.string
    })
  ),
  timeline: PropTypes.shape({
    step: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    dateFormat: PropTypes.string.isRequired,
    maxDate: PropTypes.string.isRequired,
    minDate: PropTypes.string.isRequired
  })
};

export default LegendItem;
