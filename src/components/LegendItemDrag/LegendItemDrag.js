import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';
import DragIcon from './../../assets/icons/drag-dots.svg';
import './LegendItemDrag.scss';

const LegendItemDrag = () => {
  return (
    <div className="App">
      <img src={DragIcon} />
    </div>
  );
};

export default SortableHandle(LegendItemDrag);
