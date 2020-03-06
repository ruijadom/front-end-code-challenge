import React from 'react';
import PropTypes from 'prop-types';

function ShowIcon({ className, size, fill }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 39 32" fill={fill}>
      <path d="M26.905 4.994l5.125-4.994 3.481 3.392-29.356 28.608-3.481-3.392 4.076-3.973c-2.675-2.25-4.921-4.902-6.672-7.88l-0.077-0.142c3.774-6.553 11.193-13.194 19.692-13.194 2.523 0 4.948 0.583 7.212 1.575zM11.168 20.33l3.36-3.274c-0.011-0.125-0.017-0.271-0.017-0.419 0-0.009 0-0.017 0-0.026v0.001c0-2.806 2.306-5.073 5.182-5.073 0.16 0 0.32 0.007 0.475 0.020l3.36-3.274c-1.122-0.507-2.432-0.803-3.812-0.803-0.008 0-0.016 0-0.024 0h0.001c-5.145 0-9.329 4.086-9.329 9.132 0 1.324 0.288 2.58 0.805 3.717zM34.454 10.24c1.876 1.855 3.51 3.948 4.853 6.233l0.077 0.143c-3.774 6.55-11.173 13.194-19.692 13.194-1.656-0.005-3.254-0.245-4.766-0.688l0.121 0.030 3.557-3.466c0.357 0.039 0.721 0.062 1.088 0.062 5.145 0 9.329-4.089 9.329-9.132 0-0.345-0.020-0.689-0.059-1.022l5.492-5.354z"></path>
    </svg>
  );
}

ShowIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired
};

ShowIcon.defaultProps = {
  className: ''
};

export default ShowIcon;
