//1st import single book, because that is the card maker
import SingleBook from "./SingleBook"
//to organize the cards som cols/row are needed
import { Col, Container, Row } from "react-bootstrap"
//for doing search setState is needed, so a class component is required
//class compoments need to import component or React
import { Component } from "react"

//booklist will receive an array of books
class BookList extends Component {
  //creating an state where

  render() {
    return (
      <Container>
        <Row>
          {/* inside this row multiple single cards will be displayed so 
      props.map() is needed */}
          {this.props.bookArray.slice(1, 10).map((oneBook) => (
            //xs={3} is grid system notation for displaying 4 books
            <Col xs={4} className='my-3'>
              {/* 
               {...oneBook} => img=oneBook.img title=oneBook.title
              */}
              <SingleBook {...oneBook} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}
export default BookList
