import { Button, Card } from "react-bootstrap"
import { Component } from "react"
import CommentArea from "./CommentArea"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          {/* <h5>THIS IS SINGLEBOOK</h5> */}
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>Book id: {this.props.book.asin}</Card.Text>
            <Button
              variant="primary"
              onClick={() => this.setState({ selected: !this.state.selected })}
            >
              Comments
            </Button>
          </Card.Body>
        </Card>
        {/* Both of this need to be true,  */}
        {this.state.selected && (
          <CommentArea pizzaCalabreza={this.props.book.asin} />
        )}
      </>
    )
  }
}
export default SingleBook
