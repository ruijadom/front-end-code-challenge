import React from 'react';
import PropTypes from 'prop-types';

function HideIcon({ className, size, fill, ...rest }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 47 32" fill={fill} {...rest}>
      <path d="M17.149 16c-0.002 0.056-0.003 0.122-0.003 0.189 0 3.384 2.743 6.127 6.127 6.127s6.127-2.743 6.127-6.127c0-0.066-0.001-0.133-0.003-0.198l0 0.010c0.002-0.056 0.003-0.122 0.003-0.189 0-3.384-2.743-6.127-6.127-6.127s-6.127 2.743-6.127 6.127c0 0.066 0.001 0.133 0.003 0.198l-0-0.010zM46.545 16c-4.46-7.948-13.204-16-23.273-16-10.045 0-18.813 8.052-23.273 16 4.46 7.948 13.228 16 23.273 16 10.068 0 18.813-8.052 23.273-16zM23.273 4.922c6.080 0 11.025 4.96 11.025 11.078s-4.945 11.078-11.025 11.078-11.025-4.96-11.025-11.078c0-6.118 4.945-11.078 11.025-11.078z"></path>
    </svg>
  );
}

HideIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired
};

HideIcon.defaultProps = {
  className: ''
};

export default HideIcon;
