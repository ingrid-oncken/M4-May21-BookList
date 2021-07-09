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
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Book id: {this.props.asin}</Card.Text>
            <Button
              variant="primary"
              onClick={() => this.setState({ selected: !this.state.selected })}
            >
              Comments
            </Button>
          </Card.Body>
        </Card>
        {/* Both of this need to be true,  */}
        {this.state.selected && <CommentArea />}
      </>
    )
  }
}
export default SingleBook
