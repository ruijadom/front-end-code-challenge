import React, { Component } from 'react';

import TypeBasic from './TypeBasic';
import TypeCloropleth from './TypeCloropleth';
import TypeGradient from './TypeGradient';
import TypeTimeline from './TypeTimeline';

class LegendItemTypes extends Component {
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
