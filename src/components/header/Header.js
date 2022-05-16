import React from 'react';
import SearchBar from './SearchBar';

export default class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <header>
        <h1>twosixdev</h1>
        <SearchBar data={this.props.data} methods={this.props.methods}/>
      </header>
    );
  }
}
