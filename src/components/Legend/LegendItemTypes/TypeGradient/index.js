import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class TypeGradient extends React.Component {
  documentData;

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      text: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // on form submit...
  handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem('document', JSON.stringify(this.state));
  }

  // React Life Cycle
  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));

    if (localStorage.getItem('document')) {
      this.setState({
        text: this.documentData.text
      });
    } else {
      this.setState({
        text: ''
      });
    }
  }

  render() {
    const { items } = this.props;

    const gradient = items.map(item => item.color);

    return (
      <>
        <div
          className="gradient"
          style={{
            backgroundImage: `linear-gradient(to right, ${gradient.join(',')})`
          }}
        ></div>

        <div className="gradient-info">
          {items.map(({ name }, index) => (
            <div key={index} className="gradient-info-range">
              <div>
                <div className="gradient-info-text">{name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="gradient-info-text">
          <div className="text-box">
            <form onSubmit={this.handleFormSubmit}>
              <textarea
                type="text"
                name="text"
                className="text-area"
                value={this.state.text}
                onChange={this.handleChange}
              />

              <button type="submit" className="text-check">
                Check the data
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

TypeGradient.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      name: PropTypes.string
    })
  ).isRequired
};

export default TypeGradient;
