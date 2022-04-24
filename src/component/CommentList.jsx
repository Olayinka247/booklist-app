import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ showComment }) => (
  <ListGroup>
    {showComment.map((comment) => (
      <SingleComment commentToRead={comment} key={comment._id} />
    ))}
  </ListGroup>
);
export default CommentList;
