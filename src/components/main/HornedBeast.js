import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import 'bootstrap';
import '../../css/style.css';

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
  };

  handleImageClick = () => {
    this.props.beast.handleShow(this.props.beast);
  };

  render() {
    // console.log(this.props);
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.beast.title}</Card.Title>
          <Card.Subtitle>{`${this.props.beast.keyword}`}</Card.Subtitle>
          <Card.Img
            variant="top"
            src={this.props.beast.imageUrl}
            title={this.props.beast.title}
            alt={this.props.beast.sourceKey}
            className="card-image img-fluid hover-shadow"
            onClick={this.handleImageClick}
          />
          <Card.Text>{this.props.beast.description}</Card.Text>
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
