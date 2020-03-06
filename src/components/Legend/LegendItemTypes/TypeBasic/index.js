import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TypeBasic = ({ items }) => {
  return (
    <div className="basic-list">
      <ul>
        {items.map(({ color, name }, index) => (
          <li key={index} className="basic-item">
            <div className="color-circle" style={{ backgroundColor: color }}></div>
            <div className="basic-item-name">{name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

TypeBasic.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TypeBasic;
