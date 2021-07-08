import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap"
import { Component } from "react"

class MyNav extends Component {
  state = {
    searchQuery: "",
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">M.Y. Bookstore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-4 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search Book"
              className="mr-2"
              aria-label="Search"
              //binding the search with the state, saving into searchQuery
              value={this.state.searchQuery}
              //providing an event listener
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
            <Button variant="secondary">Browse</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default MyNav
