import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import './style.css';


export default function Header() {
  return (
    <Navbar className="bg" variant="dark" fixed="top">
      <Navbar.Brand className="brand-name" href="#home">Shipment Hub</Navbar.Brand>
    </Navbar>
  );
}
