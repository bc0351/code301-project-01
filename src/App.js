import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './components/main/SelectedBeast';
import data from './data/data.json';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {data}
    };
  }

  findBeast = (key) => {this.state.data.filter(e=> {e._id === key;});};

  render() {
    // console.log(this.findBeast(1));
    return (
      <>
        <Header />
        <Main data={data} />
        <Footer />
        <SelectedBeast 
          // modalSrc={this.findBeast(
        />
      </>
    );
  }
}
