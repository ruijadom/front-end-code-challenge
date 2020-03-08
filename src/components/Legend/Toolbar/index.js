import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tooltip from 'rc-tooltip';
import ArrowDown from '../../Common/Icons/arrow-down';
import ShowIcon from '../../Common/Icons/show';
import HideIcon from '../../Common/Icons/hide';
import InfoIcon from '../../Common/Icons/info';
import '../../Common/Tooltip/';
import './style.scss';

const eye = '#393F44';
const info = '#393F44';
const down = '#333333';

function Toolbar({ onChangeVisibility, onChangeInfo, onChangeCollapse, isCollapse, isVisible }) {
  return (
    <div className="toolbar">
      <Tooltip
        overlayClassName="c-rc-tooltip -default"
        placement="top"
        trigger={['hover']}
        overlay={<span>{isVisible ? 'Show layer' : 'Hide layer'}</span>}
        destroyTooltipOnHide
      >
        {isVisible ? (
          <ShowIcon className="toolbar-icon" size={14} fill={eye} onClick={onChangeVisibility} />
        ) : (
          <HideIcon className="toolbar-icon" size={14} fill={eye} onClick={onChangeVisibility} />
        )}
      </Tooltip>

      <Tooltip
        overlayClassName="c-rc-tooltip -default"
        placement="top"
        trigger={['hover']}
        overlay={<span>Layer Info</span>}
        destroyTooltipOnHide
      >
        <InfoIcon className="toolbar-icon" size={14} fill={info} onClick={onChangeInfo} />
      </Tooltip>
      <Tooltip
        overlayClassName="c-rc-tooltip -default"
        placement="top"
        trigger={['hover']}
        overlay={<span>{isCollapse ? 'Collapse layer' : 'Expand layer'}</span>}
        destroyTooltipOnHide
      >
        <ArrowDown
          className={classnames('toolbar-icon', 'arrow-icon', 'rotate', isCollapse && 'open')}
          size={14}
          fill={down}
          onClick={onChangeCollapse}
        />
      </Tooltip>
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
