import React, { Component } from 'react';

import TypeBasic from './TypeBasic';
import TypeCloropleth from './TypeCloropleth';
import TypeGradient from './TypeGradient';

class LegendItemTypes extends Component {
  render() {
    return (
      <div>
        <TypeBasic></TypeBasic>
        <TypeCloropleth></TypeCloropleth>
        <TypeGradient></TypeGradient>
      </div>
    );
  }
}

export default LegendItemTypes;

export { TypeBasic, TypeCloropleth, TypeGradient };
