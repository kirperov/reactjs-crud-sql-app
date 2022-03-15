import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <div className="App">
        <Container fluid="md">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <div className="bg-light p-5 mb-4">
                        <div className="text-center"> Movie review </div> 
                    </div> 
                    <Form>
                        <Form.Group className="mb-3" controlId="movieName">
                            <Form.Label>Movie name</Form.Label>
                            <Form.Control name="movieName" type="text" placeholder="Movie name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="review">
                            <Form.Label>Movie review</Form.Label>
                            <Form.Control type="review" placeholder="Review" />
                        </Form.Group>
 
                        <Button variant="primary" type="submit">
                            S'inscrire
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
