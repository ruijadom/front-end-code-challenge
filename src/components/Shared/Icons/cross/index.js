import React from 'react';
import PropTypes from 'prop-types';

function CrossIcon({ size, fill, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill={fill} {...rest}>
      <path d="M16 11.636l-11.636-11.636-4.364 4.364 11.636 11.636-11.636 11.636 4.364 4.364 11.636-11.636 11.636 11.636 4.364-4.364-11.636-11.636 11.636-11.636-4.364-4.364z"></path>
    </svg>
  );
}

CrossIcon.propTypes = {
  size: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired
};

export default CrossIcon;
