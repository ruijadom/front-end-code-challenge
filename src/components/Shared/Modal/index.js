import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import './style.scss';

// Get div for appaendChild and removeChild
const modalRoot = document.getElementById('modal-root');

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    console.log(props);
  }
  onClose = e => {
    e.stopPropagation();
    this.props.onClose && this.props.onClose(e);
  };

  onKeyUp = e => {
    // Lookout for ESC key (27)
    if (e.which === 27 && this.props.show) {
      this.onClose(e);
    }
  };

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp);
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUp);
    modalRoot.removeChild(this.el);
  }

  render() {
    const modalUI = (
      <div className="backdrop">
        <div className="modal">
          <div className="modal-header">
            <button
              className="modal-close-btn "
              onClick={e => {
                this.onClose(e);
              }}
            >
              x
            </button>
          </div>
          <div className="modal-content">{ReactHtmlParser(this.props.description)}</div>
        </div>
      </div>
    );
    if (!this.props.show) {
      return null;
    }
    return ReactDOM.createPortal(modalUI, this.el);
  }
}

Modal.propTypes = {
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
