import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ArrowDown from '../../Common/Icons/arrow-down';
import ShowIcon from '../../Common/Icons/show';
import InfoIcon from '../../Common/Icons/info';
import './style.scss';

const eye = '#393F44';
const info = '#393F44';
const down = '#333333';

function Toolbar({ isOpen, onChangeCollapse }) {
  return (
    <div className="toolbar">
      <ShowIcon className="toolbar-icon" size={14} fill={eye} />
      <InfoIcon className="toolbar-icon" size={14} fill={info} />
      <ArrowDown
        className={classnames('toolbar-icon', 'arrow-icon', 'rotate', isOpen && 'open')}
        size={14}
        fill={down}
        onClick={onChangeCollapse}
      />
    </div>
  );
}

Toolbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onChangeCollapse: PropTypes.func.isRequired
};

export default Toolbar;
