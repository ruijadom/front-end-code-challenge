import React from 'react';
import LegendListItem from '../LegendListItem/LegendListItem';
import './LegendList.scss';
import data from './../data.json';
console.log(data);

function LegendList() {
  return (
    <div>
      {data.map(legend => {
        return (
          <>
            <ul className="legend-list">
              <LegendListItem key={legend.id} name={legend.name}></LegendListItem>
            </ul>
          </>
        );
      })}
    </div>
  );
}

export default LegendList;
