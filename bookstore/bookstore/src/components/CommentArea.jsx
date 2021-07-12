//comment area gotta have comment are and comment list

import React, { Component } from "react"
import { ListGroup } from "react-bootstrap"

class CommentArea extends Component {
  // everytime that fetches we need to make room for the data, so state is needed
  state = {
    comments: [], //array with list of comments
  }

  componentDidMount = async () => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.pizzaCalabreza,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwY2QyN2RjMTQ1ODAwMTVlNGFkZGUiLCJpYXQiOjE2MjU4MDQzMDYsImV4cCI6MTYyNzAxMzkwNn0.WXf5VQn2msrcKzzT0yOxhS__unRHE6Dc18WRbCoNANI",
          },
        }
      )
      const data = await resp.json()
      this.setState({
        comments: data,
      })

      console.log(data)
    } catch (error) {
      console.log(`This is CATCH error ${error}`)
    }
  }

  render() {
    return (
      <ListGroup>
        {this.state.comments.map((oneComment) => (
          <ListGroup.Item key={oneComment._id}>
            {oneComment.comment}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}

export default CommentArea
