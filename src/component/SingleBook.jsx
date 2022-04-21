import { Card } from "react-bootstrap";

const SingleBook = ({ singleBook }) => (
  <Card>
    <Card.Img variant="top" src={singleBook.img} />
    <Card.Body>
      <Card.Title>{singleBook.title}</Card.Title>
    </Card.Body>
  </Card>
);
export default SingleBook;
