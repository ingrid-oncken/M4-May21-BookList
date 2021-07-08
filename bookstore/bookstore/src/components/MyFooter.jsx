import { Container, Col, Row } from "react-bootstrap"

const MyFooter = () => (
  <footer
    className="text-white"
    expand="lg"
    style={{ backgroundColor: "gray" }}
  >
    <Container>
      <Row>
        <Col>
          <ul>
            <li>Col one</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Col two</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Col three</li>
          </ul>
        </Col>
      </Row>
    </Container>
    &copy; 2021 Ingrid Oncken - Last Modified:
    <time dateTime="06-07-2021T14:59+01:00"> 6th July 2021 at 14:59 </time>
  </footer>
)
export default MyFooter
