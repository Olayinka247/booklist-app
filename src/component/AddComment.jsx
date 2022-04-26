import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Add Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add comment"
              value={this.state.comment}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default AddComment;
