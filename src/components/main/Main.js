import React from 'react';
import './style.css';

import HornedBeast from './HornedBeast';
import dataJson from '../../data/data.json';

export default class Main extends React.Component {
  render() {
    let data = dataJson;
    let ce = React.createElement;
    console.log(data);
    return (
      <article> 
        {data.map(e=> ce(HornedBeast,{ key:e._id, title:e.title, imageUrl:e.image_url, description:e.description, keyword:e.keyword },null))}
      </article>
    );
  }
}
