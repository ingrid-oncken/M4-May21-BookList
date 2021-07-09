//comment area gotta have comment are and comment list 

import React, { Component } from "react"

class CommentArea extends Component {
// everytime that fetches we need to make room for the data, so state is needed
state = {
  comments: [] //array with list of comments
}

  componentDidMount = async () => {
    try {
      let resp = await fetch ()
    } catch (error) {
      console.log('This is CATCH error', error);
    } 

  render() {
    return (
      <div>
        {/* object with comment list */}
      </div>
    )
  }
}

export default CommentArea
