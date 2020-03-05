import React, { PureComponent } from 'react';
//import PropTypes from 'prop-types';

import TypeBasic from './TypeBasic/TypeBasic';
import TypeCloropleth from './TypeCloropleth/TypeCloropleth';
import TypeGradient from './TypeGradient/TypeGradient';
import TypeTimeline from './TypeTimeline/TypeTimeline';
import './LegendItemTypes.scss';

class LegendItemTypes extends PureComponent {
  render() {
    return (
      <div>
        <TypeBasic></TypeBasic>
        <TypeCloropleth></TypeCloropleth>
        <TypeGradient></TypeGradient>
        <TypeTimeline></TypeTimeline>
      </div>
    );
  }
}

export default LegendItemTypes;

export { TypeBasic, TypeCloropleth, TypeGradient, TypeTimeline };
