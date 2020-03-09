import React from 'react';
import PropTypes from 'prop-types';
import Gradient from './gradient';
import './style.scss';

class TypeGradient extends React.Component {
  documentData;

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      inputText: '',
      mode: 'view'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  handleSave() {
    this.setState({ text: this.state.inputText, mode: 'view' });
    localStorage.setItem('document', JSON.stringify(this.state));
  }

  handleEdit() {
    this.setState({ mode: 'edit' });
  }

  // React Life Cycle
  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));

    if (localStorage.getItem('document')) {
      this.setState({
        inputText: this.documentData.inputText
      });
    } else {
      this.setState({
        inputText: ''
      });
    }
  }

  render() {
    const { items } = this.props;
    const gradient = items.map(item => item.color);

    if (this.state.mode === 'view') {
      return (
        <div className="gradient-info-text">
          <Gradient gradient={gradient} items={items}></Gradient>
          <div className="textWrapper">
            <div onClick={this.handleEdit} className="text-check">
              Check the data
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="gradient-info-text text-box">
          <Gradient gradient={gradient} items={items}></Gradient>
          <div className="textWrapper">
            <textarea
              onChange={this.handleChange}
              value={this.state.inputText}
              className="text-area"
              autoFocus
            />
            <div onClick={this.handleSave} className="text-check">
              Save Data
            </div>
          </div>
        </div>
      );
    }
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
