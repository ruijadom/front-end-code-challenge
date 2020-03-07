import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TypeGradient = ({ items }) => {
  const gradient = items.map(item => item.color);

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
              <div className="gradient-info-name">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

TypeGradient.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      name: PropTypes.string
    })
  ).isRequired
};

export default TypeGradient;
