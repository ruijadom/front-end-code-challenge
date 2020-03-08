import React from 'react';
import PropTypes from 'prop-types';

function ArrowDownIcon({ className, size, fill, ...rest }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill={fill} {...rest}>
      <path d="M3.75 4.875l12.25 12.25 12.25-12.25 3.75 3.75-16 16-16-16z"></path>
    </svg>
  );
}

ArrowDownIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired
};

ArrowDownIcon.defaultProps = {
  className: ''
};

export default ArrowDownIcon;
