import { Col, Card } from "react-bootstrap";

/*
props {
    singleBook:book
}
*/

const SingleBook = ({ singleBook }) => (
  <div className="col-md-2">
    <Col md={2}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={singleBook.img} />
        <Card.Body>
          <Card.Title>{singleBook.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  </div>
);
export default SingleBook;
