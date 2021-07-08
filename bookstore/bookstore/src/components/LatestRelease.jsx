import { Col, Container, Carousel, Row } from "react-bootstrap"
import fantasyBooks from "../data/fantasy.json"
import horrorBooks from "../data/history.json"
import scifiBooks from "../data/scifi.json"
import MyBadge from "../components/MyBadge"

const LatestRelease = () => (
  <Container>
    <Carousel>
      <Carousel.Item classList="my-3">
        <h4>Latest Release</h4>
        <Row>
          {fantasyBooks
            .filter((book, index) => index < 4)
            .map((book) => (
              <Col xs={12} md={4} lg={3}>
                <img
                  className="d-block w-100"
                  src={book.img}
                  alt={book.title}
                />
                <MyBadge price={book.price}/>
              </Col>
            ))}
        </Row>
      </Carousel.Item>
      <Carousel.Item classList="my-3">
        <Row>
          {horrorBooks
            .filter((book, index) => index < 4)
            .map((book) => (
              <Col xs={12} md={4} lg={3}>
                <img
                  className="d-block w-100"
                  src={book.img}
                  alt={book.title}
                />
              </Col>
            ))}
        </Row>
      </Carousel.Item>
      <Carousel.Item classList="my-3">
        <Row>
          {scifiBooks
            .filter((book, index) => index < 4)
            .map((book) => (
              <Col xs={12} md={4} lg={3}>
                <img
                  className="d-block w-100"
                  src={book.img}
                  alt={book.title}
                />
              </Col>
            ))}
        </Row>
      </Carousel.Item>
    </Carousel>
  </Container>
)
export default LatestRelease
