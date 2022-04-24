import SingleBook from "./SingleBook";
import { Col, Container, Row, Form } from "react-bootstrap";
import React from "react";

class BookList extends React.Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((book) => (
              <Col md={3} key={book.asin}>
                <SingleBook book={book} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
