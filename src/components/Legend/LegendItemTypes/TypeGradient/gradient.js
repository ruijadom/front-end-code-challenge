import React from 'react';
import PropTypes from 'prop-types';

function Gradient({ items, gradient }) {
  return (
    <>
      <div
        className="gradient"
        style={{
          backgroundImage: `linear-gradient(to right, ${gradient.join(',')})`
        }}
      ></div>
      <div className="gradient-info">
        {items.map(({ name }, index) => (
          <div key={index} className="gradient-info-range">
            <div>
              <div className="gradient-info-text">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

Gradient.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      name: PropTypes.string
    })
  ).isRequired,
  gradient: PropTypes.array.isRequired
};

export default Gradient;
