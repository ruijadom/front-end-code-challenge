import React from 'react';
import PropTypes from 'prop-types';
import './LegendListItem.scss';

function LegendItem(props) {
  const { name } = props;

  console.log(props);
  return (
    <>
      <li>
        <header>
          <h3>{name}</h3>
        </header>
      </li>
    </>
  );
}

LegendItem.propTypes = {
  name: PropTypes.string
};

export default LegendItem;
