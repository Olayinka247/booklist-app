import { Card } from "react-bootstrap";
import React from "react";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        key={this.props.singleBook.asin}
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "5px solid green" : "none" }}
      >
        <Card.Img variant="top" src={this.props.singleBook.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {this.props.singleBook.title}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
