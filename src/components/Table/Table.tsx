import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './style.css';

export interface ITableProps {
  data: any;
}

const selectedClass = (value: any) => {
  return value.toLowerCase();
};


const DataTable = (props: ITableProps) => {
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
              {props.data.map((result: any) => (
                <tr key={result.id}>
                  <td>{result.id}</td>
                  <td>{result.name}</td>
                  <td>{result.userId}</td>
                  <td>{result.type}</td>
                  <td>{result.mode}</td>
                  <td>{result.origin}</td>
                  <td>{result.destination}</td>
                  <td className={`status ${selectedClass(result.status)}`}>
                    {result.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default DataTable;
