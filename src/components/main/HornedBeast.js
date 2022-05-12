import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import 'bootstrap';
import '../../style.css';

export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  faveBeast = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
    console.log(this.state.clicks);
  };

  // selectBeast = () => {
  //   this.state={
  //     key: {}
  //   }
  // }

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle>{`#${this.props.keyword}`}</Card.Subtitle>
          <Card.Img 
            variant="top"
            src={this.props.imageUrl}
            title={this.props.title}
            alt={this.props.sourceKey}
            className="card-image img-fluid hover-shadow"
            onClick={this.selectBeast}
          />
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
        <div className="card-favorite">
          <Button variant="primary" onClick={this.faveBeast}>
            {'Favorite Beast'}
          </Button>
          <div className="div-votes">
            <span className="emoji">{'❤️'}</span>
            <span className="votes">{`${this.state.clicks}`}</span>
          </div>
        </div>
      </Card>
    );
  }
}
