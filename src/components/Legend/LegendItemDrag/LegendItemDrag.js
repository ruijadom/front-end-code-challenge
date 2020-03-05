import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';

import './LegendItemDrag.scss';

const LegendItemDrag = () => <span className="legend-drag"></span>;

export default SortableHandle(LegendItemDrag);
