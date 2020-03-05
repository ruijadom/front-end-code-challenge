import React from 'react';
import PropTypes from 'prop-types';

function Info({ size, fill }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill={fill}>
      <path d="M18.107 14.899v-1.101h-6.603v2.201h2.201v6.603h-2.201v2.201h8.804v-2.201h-2.201v-7.703zM15.906 31.407c-8.509 0-15.407-6.898-15.407-15.407s6.898-15.407 15.407-15.407c8.509 0 15.407 6.898 15.407 15.407s-6.898 15.407-15.407 15.407zM13.705 7.196v4.402h4.402v-4.402h-4.402z"></path>
    </svg>
  );
}

Info.propTypes = {
  size: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired
};

export default Info;
