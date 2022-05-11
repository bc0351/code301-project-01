import React from "react";

export default class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.imageUrl = props.image_url;
    this.description = props.description;
    this.keyword = props.keyword;
  }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.alt} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}
