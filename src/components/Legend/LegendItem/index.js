import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Drag from './../Drag';
import Toolbar from './../Toolbar';
import { TypeBasic, TypeGradient, TypeCloropleth } from '../LegendItemTypes';
import Modal from './../../Common/Modal';
import './styles.scss';

const BASIC = 'basic';
const CHOROPLETH = 'choropleth';
const GRADIENT = 'gradient';

class LegendItem extends Component {
  state = {
    isVisible: true,
    isCollapse: true,
    isModalOpen: false
  };

  toogleInfo = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  };

  toogleVisibility = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

  toggleOpen = () => {
    this.setState(prevState => ({
      isCollapse: !prevState.isCollapse
    }));
  };

  renderContent() {
    const { type, items } = this.props;

    switch (type) {
      case BASIC:
        return <TypeBasic items={items} />;
      case CHOROPLETH:
        return <TypeCloropleth items={items} />;
      case GRADIENT:
        return <TypeGradient items={items} />;
      default:
        return null;
    }
  }

  render() {
    const { name, type, isLast, description } = this.props;
    const { isCollapse, isVisible, isModalOpen } = this.state;

    return (
      <div className={classnames('legend-item', isLast && 'last')}>
        <div className="legend-header">
          <div className="legend-drag">
            <Drag />
          </div>
          <div className="legend-title">{name}</div>
          <Toolbar
            onChangeVisibility={this.toogleVisibility}
            onChangeInfo={this.toogleInfo}
            onChangeCollapse={this.toggleOpen}
            isCollapse={isCollapse}
            isVisible={isVisible}
          />
        </div>

        <div className={classnames('legend-content', isCollapse && 'open')}>
          {this.renderContent(type)}
        </div>
        <Modal onClose={this.toogleInfo} show={isModalOpen} description={description}></Modal>
      </div>
    );
  }
}

LegendItem.propTypes = {
  isLast: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
