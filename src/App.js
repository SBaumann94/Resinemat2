import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import logo from './resources/Resinemat_logo-01.png'

import { Container, Row, Col } from 'react-bootstrap';
import ImageWithText from './ImageWithText';

class App extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="App layer">

          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">RESINEMAT</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Főoldal</Nav.Link>
                  <Nav.Link href="#about_us">Rólunk</Nav.Link>
                  <Nav.Link href="#contact">Kapcsolat</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container >
            <Row className="show-grid">
              <Col xs={12} sm={12} md={4} lg={4} className="text-center">
                <h1 className="slogan"><i>
                  A fejlődés kulcsa, hogy kreatívan és szabadon gondolkodhassunk.
                </i></h1>
              </Col>
              <Col sm={0} md={4} lg={4} >
                <img className="logo-image" src={logo} alt="logo"width="100%" />
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} className="text-center">
                <p className="text-just lg-text main-text"><strong>Fő tevékenységi körünk a minőségi CNC megmunkálás, valamint egyedi alkatrészek és célberendezések tervezése és gyártása.</strong></p>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4} className="reactive-text">
                <p className="main-text">24 év szakmai tapasztalat</p>
              </Col>
              <Col sm={12} md={4} className="reactive-text">
                <p className="main-text">20+ partnercég</p>
              </Col>
              <Col sm={12} md={4} className="reactive-text">
                <p className="main-text">1000+ legyártott termék</p>
              </Col>
              <Col className="image-col" xs={12}><div className="line"/>
              </Col>
            </Row>
            <Row>
            <Col className="image-col" xs={12} md={6} lg={4}>
              <ImageWithText picCode={1}/>
              </Col>
              <Col className="image-col" xs={12} md={6} lg={4}>
              <ImageWithText picCode={2}/>
              </Col>
              <Col className="image-col" xs={12} md={12} lg={4}>
              <ImageWithText picCode={3}/>
              </Col>
            </Row>
          </Container>
        </div>
      </div >);
  }
}

export default App;
