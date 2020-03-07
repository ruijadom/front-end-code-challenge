import React from 'react';
import PropTypes from 'prop-types';

function DragDotsIcon({ size, fill }) {
  return (
    <svg width={size} height={size} viewBox="0 0 19 32" fill={fill}>
      <path d="M3.2 12.8c1.767 0 3.2 1.433 3.2 3.2s-1.433 3.2-3.2 3.2c-1.767 0-3.2-1.433-3.2-3.2s1.433-3.2 3.2-3.2z"></path>
      <path d="M16 12.8c1.767 0 3.2 1.433 3.2 3.2s-1.433 3.2-3.2 3.2c-1.767 0-3.2-1.433-3.2-3.2s1.433-3.2 3.2-3.2z"></path>
      <path d="M3.2 0c1.767 0 3.2 1.433 3.2 3.2s-1.433 3.2-3.2 3.2c-1.767 0-3.2-1.433-3.2-3.2s1.433-3.2 3.2-3.2z"></path>
      <path d="M16 0c1.767 0 3.2 1.433 3.2 3.2s-1.433 3.2-3.2 3.2c-1.767 0-3.2-1.433-3.2-3.2s1.433-3.2 3.2-3.2z"></path>
      <path d="M3.2 25.6c1.767 0 3.2 1.433 3.2 3.2s-1.433 3.2-3.2 3.2c-1.767 0-3.2-1.433-3.2-3.2s1.433-3.2 3.2-3.2z"></path>
      <path d="M16 25.6c1.767 0 3.2 1.433 3.2 3.2s-1.433 3.2-3.2 3.2c-1.767 0-3.2-1.433-3.2-3.2s1.433-3.2 3.2-3.2z"></path>
    </svg>
  );
}

DragDotsIcon.propTypes = {
  size: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired
};

export default DragDotsIcon;
