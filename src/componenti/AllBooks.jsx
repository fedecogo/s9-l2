import { Card, Row, Col, Container } from 'react-bootstrap'
import Scifi from '../data/horror.json'

function AllBook() {
  return (
    <Container>
    <Row className='g-3'>
      {Scifi.map((book, index) => (
        <Col xs={6} sm={4} md={3} lg={2} key={index} style={{ maxWidth: '450px' }}>
          <Card className="p-2">
            {console.log(index)}
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.price} $</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default AllBook;

