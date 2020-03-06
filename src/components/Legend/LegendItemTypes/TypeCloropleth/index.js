import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TypeCloropleth = ({ items }) => {
  return (
    <div className="basic-list">
      <div className="basic-item">
        {items.map(({ color, name }, index) => (
          <div key={index} className="basic-item-range">
            <div>
              <div className="color-bar" style={{ backgroundColor: color }}></div>
              <div className="basic-item-name">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TypeCloropleth.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default TypeCloropleth;
