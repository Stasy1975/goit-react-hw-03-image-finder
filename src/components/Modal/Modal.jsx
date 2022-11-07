import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from './Modal.styled';

const modal = document.querySelector('#modal');

export class ModalWindow extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.onClose();
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) this.props.onClose();
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modal>
          <img src={src} alt={alt} />
        </Modal>
      </Overlay>,
      modal
    );
  }
}

ModalWindow.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};