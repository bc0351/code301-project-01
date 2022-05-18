import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SelectedBeast from './components/main/SelectedBeast';
import importedData from './data/data.json';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import SearchBar from './components/header/SearchBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: importedData.map((datum, index) => {
        return {
          key: index,
          beast: {
            ...datum,
            display: true
          },
        };
      }),
      showModal: false,
      beast: {},
      testObject: {
        testProp: 'test'
      }
    };
  }

  handleFilter = (filterIndexArr) => {
    console.log(filterIndexArr);
    let filteredData = this.state.data;
    this.setState({
      data: filteredData.map((datum) => {
        !filterIndexArr.includes(datum.key)
          ? (datum.beast.display = false)
          : (datum.beast.display = true);
      }),
    });
    console.log(`app.handlefilter: ${this.state.data}`);
  };

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
    let data = this.state.data;
    let methods = {handleFilter: this.handleFilter, show: this.state.showModal, onHide: this.handleClose, handleShow: this.handleShow, handleClose: this.handleClose};
    return (
      <>
        <Header data={data} methods={methods}>
          <SearchBar data={data} methods={methods}/>
        </Header>
        <Main data={data} methods={methods}/>
        <Footer />
        <SelectedBeast
          data={data} methods={methods} beast={this.state.beast}
        />
      </>
    );
  }
}
