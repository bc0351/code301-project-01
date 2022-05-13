import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import '../../css/style.css';

export default class Main extends Component {
  render() {
    let beasts = this.props.data.map((e, i) => {
      let props = {
        key: e._id,
        title: e.title,
        imageUrl: e.image_url,
        description: e.description,
        keyword: e.keyword,
        horns: e.horns,
        handleShow: this.props.handleShow,
      };
      return <HornedBeast key={i} beast={props} />;
    });
    return <main>{beasts}</main>;
  }
}
