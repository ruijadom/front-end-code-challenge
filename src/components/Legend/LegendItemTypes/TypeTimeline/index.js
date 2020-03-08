import React from 'react';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';
import { convertToYear } from '../../../Common/Dates';
const Range = Slider.Range;
import './style.scss';

class TypeTimeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeline: this.props.timeline,
      start: 0,
      end: 100
    };
    this.log = this.log.bind(this);
  }

  log(value) {
    this.setState({
      start: value[0],
      end: value[1]
    });
    console.log(this.state);
  }

  render() {
    const { timeline } = this.state;
    const startDate = convertToYear(timeline.minDate);
    const endDate = convertToYear(timeline.maxDate);

    const { start, end } = this.state;

    return (
      <div className="timeline">
        <div className="timeline-item-name">
          <Range allowCross={false} defaultValue={[start, end]} onChange={this.log} reverse />
          <div className="timeline-item-date">
            <div className="timeline-minDate">{startDate}</div>
            <div className="timeline-maxDate">{endDate}</div>
          </div>
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
