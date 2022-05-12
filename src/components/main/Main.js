import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import '../../style.css';

export default class Main extends Component {
  render() {
    let beasts = this.props.data.map((e, i) => {
      return (
        <HornedBeast
          key={i}
          sourceKey={e._id}
          title={e.title}
          imageUrl={e.image_url}
          description={e.description}
          keyword={e.keyword}
          horns={e.horns}
        />
      );
    });
    return <main>{beasts}</main>;
  }
}
