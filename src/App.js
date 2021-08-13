import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import logo2 from './resources/Resinemat_logo-02.png'

import { Container, Row, Col } from 'react-bootstrap';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import Home from './Home';
import About from './About';
import Contact from './Contact';

// run this function from an event handler or an effect to execute scroll 

class App extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="App layer ">
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand href="/"><img className="" src={logo2} alt="logo2" width="70vh" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Item as="h6" ><li><FontAwesomeIcon icon={faPhoneAlt} />+36(34)319-134</li></Nav.Item>
                    <Nav.Item as="h6"><li><FontAwesomeIcon icon={faMobileAlt} /> +36(70)930-4890</li></Nav.Item>
                    <Nav.Link href="/">Főoldal</Nav.Link>
                    <Nav.Link href="/about">Rólunk</Nav.Link>
                    <Nav.Link href="/contact">Kapcsolat</Nav.Link>
                    <Nav.Link href="https://www.facebook.com/resinemat"><FontAwesomeIcon icon={faFacebook} size="2x" /> </Nav.Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
          </Router>
        </div>
        <Container className="footer">
          <Row className="text-center footer-text">
            <Col xs={12} sm={12} md={6} lg={4} >
              <p>Adatvédelmi tájékoztató</p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} >
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} >
              <p>Resinemat Kft 2800, Tatabánya Tavaszmező u 4/b. </p>
            </Col>
          </Row>
        </Container>
      </div >);
  }
}

export default App;
