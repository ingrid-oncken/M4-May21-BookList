import { Container, Col, Row } from "react-bootstrap"

const MyFooter = () => (
  <footer
    className="fixed-bottom text-white"
    expand="lg"
    style={{ backgroundColor: "gray" }}
  >
    <Container className="mt-3">
      <Row>
        <Col>
          <ul>
            <li>Line one</li>
            <li>Line two</li>
            <li>Line three</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Line one</li>
            <li>Line two</li>
            <li>Line three</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Line one</li>
            <li>Line two</li>
            <li>Line three</li>
          </ul>
        </Col>
      </Row>
    </Container>
    &copy; 2021 Ingrid Oncken - Last Modified:
    <time datetime="06-07-2021T14:59+01:00"> 6th July 2021 at 14:59 </time>
  </footer>
)
export default MyFooter