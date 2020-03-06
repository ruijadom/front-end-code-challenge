import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TypeCloropleth = ({ items }) => {
  return (
    <div className="cloropleth">
      <div className="cloropleth-item">
        {items.map(({ color, name }, index) => (
          <div key={index} className="cloropleth-bar-range">
            <div>
              <div className="cloropleth" style={{ backgroundColor: color }}></div>
              <div className="cloropleth-item-name">{name}</div>
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
