import { Col, Container, Carousel, Figure, Row } from "react-bootstrap"
import fantasyBooks from "../data/fantasy.json"
// import horrorBooks from "../data/history.json"
// import scifiBooks from "../data/scifi.json"

const LatestRelease = () => (
  <Container>
    <Carousel>
      <Carousel.Item>
        <Row>
          {fantasyBooks
            .filter((book, index) => index < 5)
            .map((book) => (
              <Col xs={12} md={4} lg={3}>
                <img
                  // width={85}
                  // height={90}
                  // className="d-block w-100"
                  src={book.img}
                  alt={book.title}
                />
              </Col>
            ))}
        </Row>
      </Carousel.Item>
      {/* <Carousel.Item>
        <Row>
          {horrorBooks
            .filter((book, index) => index < 12)
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
      <Carousel.Item>
        <Row>
          {scifiBooks
            .filter((book, index) => index < 12)
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
      </Carousel.Item>*/}
    </Carousel>
  </Container>
)
export default LatestRelease
