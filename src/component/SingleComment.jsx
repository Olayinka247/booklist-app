import { ListGroup } from "react-bootstrap";

const SingleComment = ({ commentToRead }) => (
  <>
    <ListGroup.Item> Comment - {commentToRead.comment}</ListGroup.Item>
    <ListGroup.Item>Rating - {commentToRead.rate}</ListGroup.Item>
  </>
);

export default SingleComment;
