//comment area gotta have comment are and comment list

import React, { Component } from "react"

class CommentArea extends Component {
  // everytime that fetches we need to make room for the data, so state is needed
  state = {
    comments: [], //array with list of comments
  }

  componentDidMount = async () => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.pizza,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwY2QyN2RjMTQ1ODAwMTVlNGFkZGUiLCJpYXQiOjE2MjU4MDQzMDYsImV4cCI6MTYyNzAxMzkwNn0.WXf5VQn2msrcKzzT0yOxhS__unRHE6Dc18WRbCoNANI",
          },
        }
      )
      console.log(resp)
    } catch (error) {
      console.log(`This is CATCH error ${error}`)
    }
  }

  render() {
    return <div>{/* object with comment list */}</div>
  }
}

export default CommentArea
