import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';
import DragIcon from '../../Common/Icons/drag-dots';
import './style.scss';

const drag = '#AAAAAA';

function DragComp() {
  return (
    <div className="drag">
      <DragIcon size={14} fill={drag} />
    </div>
  );
}

export default SortableHandle(DragComp);
