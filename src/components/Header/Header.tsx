import React, { PureComponent } from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


export class Header extends PureComponent<{}> {
  render() {
    return (
      <Navbar className="bg" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Front end link</Navbar.Brand>
      </Navbar>
    );
  }
}
