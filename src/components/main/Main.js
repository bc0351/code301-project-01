import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import '../../css/style.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let beasts = this.props.data.map((e) => {return ((e.beast.display)?<HornedBeast key={e.key} methods={this.props.methods} beast={e.beast} />:'');});
    return <main>{beasts}</main>;
  }
}
