import { Card } from "react-bootstrap";
import React from "react";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? "5px solid green" : "none" }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
            {this.state.selected && (
              <CommentArea bookAsin={this.props.book.asin} />
            )}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
