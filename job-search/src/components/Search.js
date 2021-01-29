import React, { useState } from 'react';
import {Form, Button, Row, Col } from 'react-bootstrap';

const Search = (props) => {
    const [state, setState] = useState({
      description: '',
      location: '',
      full_time: false
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'full-time'){
            setState((prevState) => ({ ...state, [name]: !prevState.full_time}))
        } else{
            setState({ ...state, [name]: value })
        }
    }

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(state);
    }

    return(
        <div className="search-section">
            <Form className='search-form' onSubmit={handleSearch}>
                <Row>
                    <Col>
                    <Form.Group controlId="description">
                        <Form.Control
                            type="text"
                            name="description"
                            value={state.description || ''}
                            placeholder="Enter search term"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="location">
                            <Form.Control
                                type="text"
                                name="location"
                                value={state.location || ''}
                                placeholder= "Enter Location"
                                onChange={handleInputChange}
                                />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit" className="btn-search"></Button>
                    </Col>
                </Row>
                <div className="filters">
                    <Form.Group controlId="full_time">
                        <Form.Check
                            type="checkbox"
                            name="full_time"
                            className="full-time-checkbox"
                            label="Full time only"
                            checked={state.full_time}
                            onChange={handleInputChange}
                            />
                    </Form.Group>
                </div>
            </Form>
        </div>
    )
}

export default Search

// In this component, the input text fields, for description and location have been added, as well as a checkbox to retrieve only full-time jobs