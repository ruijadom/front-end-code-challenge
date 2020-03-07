import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const TypeTimeline = ({ timeline }) => {
  console.log(timeline);

  return (
    <div className="timeline-list">
      <div className="timeline-item-name">
        <div>step: {timeline.step}</div>
        <div>speed: {timeline.speed}</div>
        <div>dateFormate: {timeline.dateFormat}</div>
        <div>minDate: {timeline.minDate}</div>
        <div>maxDate: {timeline.maxDate}</div>
      </div>
    </div>
  );
};

TypeTimeline.propTypes = {
  timeline: PropTypes.shape({
    step: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    dateFormat: PropTypes.string.isRequired,
    maxDate: PropTypes.string.isRequired,
    minDate: PropTypes.string.isRequired
  })
};

export default TypeTimeline;
