import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

export default class SelectedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalSrc: '',
      caption: '',
    };
  }

  handleShow = (modalSrc, caption) => {
    this.setState({
      showModal: true,
      modalSrc: modalSrc,
      caption: caption,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <div handleShow={this.handleShow}>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton />
          <Modal.Img src={this.state.modalSrc} caption={this.state.caption} />
        </Modal>
      </div>
    );
  }
}
