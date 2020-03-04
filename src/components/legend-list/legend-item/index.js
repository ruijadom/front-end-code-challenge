import React from 'react';
import PropTypes from 'prop-types';

function LegendItem(props) {
  const { name } = props;

  console.log(props);
  return (
    <>
      <p>{name}</p>
    </>
  );
}

LegendItem.propTypes = {
  name: PropTypes.string
};

export default LegendItem;
