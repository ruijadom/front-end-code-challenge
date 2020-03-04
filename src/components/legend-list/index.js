import React from 'react';
import LegendItem from './legend-item/index';
import data from './../data.json';
console.log(data);

function LegendList() {
  return (
    <div>
      {data.map(legend => {
        return <LegendItem key={legend.id} name={legend.name}></LegendItem>;
      })}
    </div>
  );
}

export default LegendList;
