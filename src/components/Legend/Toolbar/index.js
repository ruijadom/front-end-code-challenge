import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ArrowDown from '../../Shared/Icons/arrow-down';
import ShowIcon from '../../Shared/Icons/show';
import HideIcon from '../../Shared/Icons/hide';
import InfoIcon from '../../Shared/Icons/info';
import './style.scss';

const eye = '#393F44';
const info = '#393F44';
const down = '#333333';

function Toolbar({ onChangeVisibility, onChangeInfo, onChangeCollapse, isCollapse, isVisible }) {
  return (
    <div className="toolbar">
      {isVisible ? (
        <ShowIcon
          className={classnames('toolbar-icon', isVisible && 'showTooltip')}
          size={14}
          fill={eye}
          onClick={onChangeVisibility}
        />
      ) : (
        <HideIcon
          className={classnames('toolbar-icon', isVisible && 'showTooltip')}
          size={14}
          fill={eye}
          onClick={onChangeVisibility}
        />
      )}

      <InfoIcon className="toolbar-icon" size={14} fill={info} onClick={onChangeInfo} />

      <ArrowDown
        className={classnames('toolbar-icon', 'arrow-icon', 'rotate', isCollapse && 'open')}
        size={14}
        fill={down}
        onClick={onChangeCollapse}
      />
    </div>
  );
}

Toolbar.propTypes = {
  isCollapse: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onChangeVisibility: PropTypes.func.isRequired,
  onChangeInfo: PropTypes.func.isRequired,
  onChangeCollapse: PropTypes.func.isRequired
};

export default Toolbar;
