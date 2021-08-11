import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDollar, faImages, faMapMarkedAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import logo from './resources/Resinemat_logo-02.png'

import { Container, Row, Col } from 'react-bootstrap';
import ImageWithText from './ImageWithText';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

class App extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="App layer ">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><img className="" src={logo} alt="logo" width="70vh" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Főoldal</Nav.Link>
                  <Nav.Link href="#about_us">Rólunk</Nav.Link>
                  <Nav.Link href="#contact">Kapcsolat</Nav.Link>
                  <Nav.Link href="https://www.facebook.com/resinemat"><FontAwesomeIcon icon={faFacebook} size="2x" /> </Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container className="pad-top">
            <Row className="show-grid">
              <Col xs={12} sm={12} md={4} lg={4} className="text-center">
                <h1 className="slogan"><i>
                  A fejlődés kulcsa, hogy kreatívan és szabadon gondolkodhassunk.
                </i></h1>
              </Col>
              <Col sm={0} md={4} lg={4} >
                <img className="logo-image" src={logo} alt="logo" width="100%" />
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
              <Col xs={12}><div className="line" />
              </Col>
            </Row>
            <Row>
              <Col className="image-col" xs={12} md={6}>
                <ImageWithText picCode={1} />
              </Col>
              <Col className="image-col" xs={12} md={6}>
                <ImageWithText picCode={2} />
              </Col>
              <Col className="image-col" xs={12} md={12}>
                <ImageWithText picCode={3} />
              </Col>
              <Col xs={12}><div className="line" /></Col>
            </Row>
            <Row>
              <Col className="icon-col text-center main-text" xs={12} md={6} lg={4}>
                <p><FontAwesomeIcon icon={faCommentDollar} size="3x" />  Kérjen tőlünk árajánlatot</p>
              </Col>

              <Col className="icon-col text-center main-text" xs={12} md={6} lg={4}>
                <p><FontAwesomeIcon icon={faImages} size="3x" />  Tekintse meg korábbi munkáink</p>
              </Col>

              <Col className="icon-col text-center main-text" xs={12} md={6} lg={4}>
                <p><FontAwesomeIcon icon={faMapMarkedAlt} size="3x" />  Látogasson el hozzánk</p>
              </Col>
            </Row>
            <Row>
              <Col className="main-text about-text" xs={12} md={6}>
                <h3>Rólunk</h3>
                <p>Célunk a kezdetektől fogva, a térségben felmerülő speciális, kreativitást igénylő megmunkálási igények kielégítése. Vállaljuk kis és közepes sorozatszámú, egyedi alkatrészek, valamint komplett célgépek tervezését és kivitelezését.
                  <br />Úgy gondoljuk, hogy a mai modern világban a mechatronikai megoldások jelentik a jövőt. Ezt szem előtt tartva, olyan egyedi igényeket kiszolgáló berendezések tervezését és kivitelezését vállaljuk, ahol fontos, hogy a részterületek integrációja révén, komplexebb feladatok megoldására is alkalmas legyen az adott berendezés.
                  <br />Partnereink között megtalálható sok, a térség gazdaságát befolyásoló multinacionális vállalat, valamint több kisebb, ám annál meghatározóbb helyi vállalkozás. Külföldi megrendelőinknek köszönhetően, az általunk gyártott alkatrészeket és berendezéseket sikerrel exportáltuk Ausztriába, Romániába, Olaszországba, valamint Kínába is.
                  <br />Mint egyszer minden vállalkozás életében, így cégünknél is eljött a generációváltás ideje. Ezzel együtt, új területek felé is szeretnénk nyitni, azonban fontosnak tartjuk, hogy a Nagyapáink által teremtett értékeket és szakértelmet a legjobb tudásunk szerint megőrizzük, megtartva ezzel megrendelőink belénk fektetett bizalmát.</p>
              </Col>
              <Col className="main-text why-text" xs={12} md={6}>
                <h3>Miért pont a Resinemat?</h3>
                <ul>
                  <li><FontAwesomeIcon icon={faPlusCircle} size="2x" />  24 éves tapasztalattal rendelkezünk a megmunkálás területén.</li>
                  <li><FontAwesomeIcon icon={faPlusCircle} size="2x" />  Egyedi igényekhez egyedi megoldásokat kínálunk.</li>
                  <li><FontAwesomeIcon icon={faPlusCircle} size="2x" />  Szívesen támogatjuk azokat a cégeket és magánszemélyeket, akik rendelkeznek valamilyen újító ötlettel.</li>
                </ul>
              </Col>
              <Col xs={12}><div className="line" /></Col>
            </Row>
          </Container>
        </div>
        <Container className="footer">
          <Row className="text-center footer-text">
            <Col xs={12} sm={12} md={6} lg={4} >
              <p>Adatvédelmi tájékoztató</p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} >
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} >
              <p>Resinemat Kft 2800, Tatabánya Banyi János utca 49. </p>
            </Col>
          </Row>
        </Container>
      </div >);
  }
}

export default App;
