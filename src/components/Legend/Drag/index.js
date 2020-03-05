import React from 'react';
import DragIcon from '../../Common/Icons/drag-dots';

const drag = '#AAAAAA';

function index() {
  return (
    <div className="drag">
      <div className="toolbar-icon">
        <DragIcon size={14} fill={drag} />
      </div>
    </div>
  );
}

export default index;
