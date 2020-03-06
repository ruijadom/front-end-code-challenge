import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TypeGradient = ({ items }) => {
  const gradient = items.map(item => item.color);
  console.log(gradient);

  return (
    <div className="gradient">
      <ul className="gradient-item">
        {items.map(({ color, name }, index) => (
          <li key={index} className="gradient-bar-range">
            <div>
              <div
                className="gradient"
                style={{
                  backgroundImage: `linear-gradient(to right, ${gradient.join(',')})`
                }}
              ></div>
              <div className="gradient-item-name">{name}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

TypeGradient.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TypeGradient;
