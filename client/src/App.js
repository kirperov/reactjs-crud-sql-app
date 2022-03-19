import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
    const [movieName, setMovieName] = useState("");
    const [review, setReview] = useState("");
    const [moviesReviewList, setMoviesList] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setMoviesList(response.data);
        });
    });

    const submitReview = () => {
        Axios.post("http://localhost:3001/api/insert", {
            movieName: movieName,
            movieReview: review,
        }).then(() => {
            console.log("succes insert");
        });
    }
    
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
                            <Form.Control 
                            name="movieName"
                            onChange={(e) => {
                                setMovieName(e.target.value);
                            }}
                            type="text"
                            placeholder="Movie name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="review">
                            <Form.Label>Movie review</Form.Label>
                            <Form.Control
                            name="review"
                            onChange={(e) => {
                                setReview(e.target.value);
                            }}
                            type="text" 
                            placeholder="Review" />
                        </Form.Group>
 
                        <Button 
                        variant="primary" 
                        onClick={submitReview}
                        type="submit">
                            S'inscrire
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        {moviesReviewList.map((val) => {
            return <h1>Movie Name: {val.movieName} | Movie Review: {val.movieReview}</h1>
        })}
    </div>
  );
}

export default App;
