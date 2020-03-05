import React, { PureComponent } from 'react';

import TypeBasic from './TypeBasic';
import TypeCloropleth from './TypeCloropleth';
import TypeGradient from './TypeGradient';
import TypeTimeline from './TypeTimeline';
import './style.scss';

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
