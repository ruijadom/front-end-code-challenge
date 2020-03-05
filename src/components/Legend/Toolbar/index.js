import React from 'react';
import ArrowDown from '../../Common/Icons/arrow-down';
import ShowIcon from '../../Common/Icons/show';
import InfoIcon from '../../Common/Icons/info';
import './style.scss';

const eye = '#393F44';
const info = '#393F44';
const down = '#333333';

function Toolbar() {
  return (
    <div className="toolbar">
      <div className="toolbar-icon">
        <ShowIcon size={14} fill={eye} />
      </div>
      <div className="toolbar-icon">
        <InfoIcon size={14} fill={info} />
      </div>
      <div className="toolbar-icon">
        <ArrowDown size={14} fill={down} />
      </div>
    </div>
  );
}

export default Toolbar;
