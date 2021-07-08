import { Button, Card } from "react-bootstrap"
import { Component } from "react"

class SingleBook extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        {/* <h5>THIS IS SINGLEBOOK</h5> */}
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>Book id: {this.props.asin}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}
export default SingleBook
