import { Container, Jumbotron, Button } from "react-bootstrap"

const MyJumbo = () => (
  <Container>
    <Jumbotron
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/5331072/pexels-photo-5331072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)",
        backgroundPosition: "left",
      }}
    >
      <h1>Welcome to M.Y. Bookstore</h1>
      <p>The coziest place to read and relax.</p>
      <p>
        <Button variant="dark">Find us</Button>
      </p>
    </Jumbotron>
  </Container>
)
export default MyJumbo
