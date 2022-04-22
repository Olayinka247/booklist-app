import React from "react";
import { Alert } from "react-bootstrap";
// import CommentsList from "./CommentsList";

class CommentArea extends React.Component {
  state = {
    comments: [],
  };

  componentDidUpdate = () => {
    this.displayCommet();
  };

  displayCommet = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.displayasin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjI0MzRlYTdiMTAwMTVkMDY3YWYiLCJpYXQiOjE2NTA2MzU3NTMsImV4cCI6MTY1MTg0NTM1M30.u6boJ-f1cVbgoIsKaEaAInhBCEzjzeqx6mUwi9mFA5Q",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        // this.setState({ comments: data });
      }
    } catch (error) {
      alert("Error Occured, Retry");
    }
  };

  render() {
    return (
      <div style={{ position: "fixed", width: "500px" }}>
        <h1>My Comment</h1>
      </div>
    );
  }
}

export default CommentArea;
