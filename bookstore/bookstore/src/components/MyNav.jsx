import { Nav, Navbar } from "react-bootstrap"
import { Component } from "react"

class MyNav extends Component {
 

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
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default MyNav
