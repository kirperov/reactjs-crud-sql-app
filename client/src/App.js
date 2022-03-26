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
            movieReview: review
        });

        setMoviesList([
            ...moviesReviewList,
            { movieName: movieName, movieReview: review}
        ]);
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
                        >
                            S'inscrire
                        </Button>
                    </Form>
                </Col>
                {moviesReviewList.map((val) => {
                    return (
                    <Row className="justify-content-md-center">
                        <Col md={6}>
                            <div className="card m-3 p-3" key={val.id}>
                                <h1>{val.movieName}</h1>
                                <p>{val.movieReview}</p>
                                <div className='container-fluid p-3'>
                                    <div className="row">
                                        <Button variant="danger">  Delete  </Button>
                                        <input name="update" type="text" placeholder="Update" />
                                        <Button variant="success">Update</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    )
                })}
            </Row>
        </Container>
    </div>
  );
}

export default App;
