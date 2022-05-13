import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

export default class SelectedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: this.props.beast,
    };
  }
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="modal-image" src={this.props.beast.imageUrl} alt={this.props.beast.title} />
          </Modal.Body>
          <Modal.Title>{this.props.beast.description}</Modal.Title>
        </Modal>
      </>
    );
  }
}
