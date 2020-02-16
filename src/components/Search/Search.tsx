import React from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';
import './style.css';

const Search = (props: any) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Form className="search-control">
            <Form.Control
              type="text"
              placeholder="Seacrh by shipment id, name"
              value={props.searchTerm}
              onChange={props.handleChange}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
