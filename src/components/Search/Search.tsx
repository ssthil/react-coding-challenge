import React from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';
import './style.css';

function Search() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Form className="search-control">
            <Form.Control
              type="text"
              placeholder="Seacrh by shipment id"
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
