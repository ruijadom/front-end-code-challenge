import React from 'react';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';
const Range = Slider.Range;
import './style.scss';

function log(value) {
  console.log(value); //eslint-disable-line
}
class TypeTimeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeline: this.props.timeline
    };
  }

  render() {
    const { timeline } = this.state;

    return (
      <div className="timeline">
        <div className="timeline-item-name">
          <Range allowCross={false} defaultValue={[0, 20]} onChange={log} reverse />
          <div className="timeline-item-date">
            <div className="timeline-minDate">{timeline.minDate}</div>
            <div className="timeline-maxDate">{timeline.maxDate}</div>
          </div>
          <div>step: {timeline.step}</div>
          <div>speed: {timeline.speed}</div>
          <div>dateFormate: {timeline.dateFormat}</div>
          <div>minDate: {timeline.minDate}</div>
          <div>maxDate: {timeline.maxDate}</div>
        </div>
      </div>
    );
  }
}

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
