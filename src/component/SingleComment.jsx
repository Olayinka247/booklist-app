import { ListGroup, Button } from "react-bootstrap";

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjI0MzRlYTdiMTAwMTVkMDY3YWYiLCJpYXQiOjE2NTA4Mzk0NzEsImV4cCI6MTY1MjA0OTA3MX0.26nHo-LOdZvvyaRIOf1Mhk4YWVJBDC7o2CmPW0KXEU8",
        },
      }
    );
    if (response.ok) {
      alert("Comment Deleted Successfully!");
    } else {
      alert("Comment Not Deleted!");
    }
  } catch (error) {
    alert("Comment Not Deleted!");
  }
};

const SingleComment = ({ commentToRead }) => (
  <>
    <ListGroup.Item> Comment - {commentToRead.comment}</ListGroup.Item>
    <ListGroup.Item>Rating - {commentToRead.rate}</ListGroup.Item>

    <Button
      variant="danger"
      className="ml-2"
      onClick={() => deleteComment(commentToRead._id)}
    >
      Delete
    </Button>
  </>
);

export default SingleComment;
