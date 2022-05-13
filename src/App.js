import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SelectedBeast from './components/main/SelectedBeast';
import data from './data/data.json';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {},
    };
  }

  handleShow = (beast) => {
    this.setState({
      showModal: true,
      beast: beast,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main data={data} handleShow={this.handleShow} />
        <Footer />
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.handleClose}
          handleShow={this.handleShow}
          beast={this.state.beast}
        />
      </>
    );
  }
}
