import { Jumbotron } from "react-bootstrap";

const Welcome = () => (
  <Jumbotron className="bg-dark text-white shadow rounded ">
    <div>
      <h1 className="d-flex justify-content-start">Book Libary 📚 </h1>
      <p className="d-flex justify-content-start">
        <strong>Purchase a Book From The Comfort Of Your Home</strong>
      </p>
    </div>
  </Jumbotron>
);

export default Welcome;
