import React, { PureComponent } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './style.css';

export interface ITableProps {
  data: any;
}

export default class DataTable extends PureComponent<ITableProps> {
  render() {
    const { data } = this.props;
    console.log(this.props);
    return (
      <Container fluid className="table">
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Shipment ID</th>
                  <th>Name</th>
                  <th>User ID</th>
                  <th>Type</th>
                  <th>Mode</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="data">
                {data.map((result: any) => (
                  <tr key={result.id}>
                    <th>{result.id}</th>
                    <th>{result.name}</th>
                    <th>{result.userId}</th>
                    <th>{result.type}</th>
                    <th>{result.mode}</th>
                    <th>{result.origin}</th>
                    <th>{result.destination}</th>
                    <th>{result.status}</th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
