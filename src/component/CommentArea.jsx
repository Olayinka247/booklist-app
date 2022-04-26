import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comment: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.bookAsin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjI0MzRlYTdiMTAwMTVkMDY3YWYiLCJpYXQiOjE2NTA4Mzk0NzEsImV4cCI6MTY1MjA0OTA3MX0.26nHo-LOdZvvyaRIOf1Mhk4YWVJBDC7o2CmPW0KXEU8",
          },
        }
      );

      if (response.ok) {
        let comments = await response.json();
        this.setState({ comment: comments });
      }
    } catch (error) {
      alert("Something Went Wrong: Try Again");
    }
  };
  render() {
    return (
      <div>
        <AddComment asin={this.props.bookAsin} />
        <CommentList showComment={this.state.comment} />
      </div>
    );
  }
}

export default CommentArea;
