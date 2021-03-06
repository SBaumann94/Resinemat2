import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Zoom from 'react-reveal/Zoom';

import ImageWithText from './ImageWithText';
import { faCommentDollar, faImages, faMapMarkedAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

//import logo from './resources/HeaderPic.jpg'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.myMap = React.createRef()
    }
    executeScroll = () => this.myMap.current.scrollIntoView()
    render() {
        return (
            <Container className="pad-top">

                <Zoom>
                    <Row className="show-grid">
                        {/*
                    <Col md={12} lg={1} xl={1} className="algin-center">
                        <ul className="main-text black-on-white text-right"><strong>
                            <li>CNC megmunkálás</li>
                            <li>Egyedi alkatrészek</li>
                            <li>Célberendezések</li>
                        </strong></ul>
                    </Col>
                     */}
                    </Row>
                </Zoom>
                <Row>
                    <Col sm={12} md={4} className="reactive-text">
                        <p className="main-text"><CountUp start="1" end="24" duration="3"></CountUp> év szakmai tapasztalat</p>
                    </Col>
                    <Col sm={12} md={4} className="reactive-text">
                        <p className="main-text"><CountUp start="1" end="20" duration="3"></CountUp>+ partnercég</p>
                    </Col>
                    <Col sm={12} md={4} className="reactive-text">
                        <p className="main-text"><CountUp start="1" end="1000" duration="3"></CountUp>+ legyártott termék</p>
                    </Col>
                    <Col xs={12}><div className="line" />
                    </Col>
                </Row>
                <Zoom>
                    <Row >

                        <Col className="image-col text-center" sm={12} md={4}>
                            <a className='regular-anchor' href="/about" ><ImageWithText picCode={1} /></a>
                        </Col>

                        <Col className="image-col text-center" sm={12} md={4}>
                            <a className='regular-anchor' href="/about" ><ImageWithText picCode={2} /></a>
                        </Col>

                        <Col className="image-col text-center" sm={12} md={4}>
                            <a className='regular-anchor' href="/about" ><ImageWithText picCode={3} /></a>
                        </Col>
                        <Col xs={12}><div className="line" /></Col>
                    </Row>
                </Zoom>

                <Zoom>
                    <Row className="icon-row">
                        <Col className="icon-col text-center main-text" xs={12} md={6} lg={4}><a href="/contact">
                            <p><FontAwesomeIcon icon={faCommentDollar} size="3x" />  Kérjen tőlünk árajánlatot</p></a>
                        </Col>

                        <Col className="icon-col text-center main-text " xs={12} md={6} lg={4} ><a href="/about">
                            <p><FontAwesomeIcon icon={faImages} size="3x" />  Tekintse meg korábbi munkáink</p></a>
                        </Col>

                        <Col className="icon-col text-center main-text " xs={12} md={6} lg={4} onClick={this.executeScroll}>
                            <p><FontAwesomeIcon icon={faMapMarkedAlt} size="3x" />  Látogasson el hozzánk</p>
                        </Col>
                    </Row>

                </Zoom>

                <Zoom>
                    <Row className="dark-row">
                        <Col className="main-text about-text" xs={12} md={6}>
                            <h3>Rólunk</h3>
                            <p >Célunk a kezdetektől fogva, a térségben felmerülő speciális, kreativitást igénylő megmunkálási igények kielégítése. Vállaljuk kis és közepes sorozatszámú, egyedi alkatrészek, valamint komplett célgépek tervezését és kivitelezését.
                                <br /><br />Úgy gondoljuk, hogy a mai modern világban a mechatronikai megoldások jelentik a jövőt. Ezt szem előtt tartva, olyan egyedi igényeket kiszolgáló berendezések tervezését és kivitelezését vállaljuk, ahol fontos, hogy a részterületek integrációja révén, komplexebb feladatok megoldására is alkalmas legyen az adott berendezés.
                                <br /><br />Partnereink között megtalálható sok, a térség gazdaságát befolyásoló multinacionális vállalat, valamint több kisebb, ám annál meghatározóbb helyi vállalkozás. Külföldi megrendelőinknek köszönhetően, az általunk gyártott alkatrészeket és berendezéseket sikerrel exportáltuk Ausztriába, Romániába, Olaszországba, valamint Kínába is.
                                <br /><br />Mint egyszer minden vállalkozás életében, így cégünknél is eljött a generációváltás ideje. Ezzel együtt, új területek felé is szeretnénk nyitni, azonban fontosnak tartjuk, hogy a Nagyapáink által teremtett értékeket és szakértelmet a legjobb tudásunk szerint megőrizzük, megtartva ezzel megrendelőink belénk fektetett bizalmát.</p>
                        </Col>
                        <Col className="main-text why-text" xs={12} md={6}>
                            <h3>Miért pont a Resinemat?</h3>
                            <ul>
                                <li><FontAwesomeIcon icon={faPlusCircle} size="2x" />  24 éves tapasztalattal rendelkezünk a megmunkálás<br /> területén.</li>
                                <li><FontAwesomeIcon icon={faPlusCircle} size="2x" />  Egyedi igényekhez egyedi megoldásokat kínálunk.</li>
                                <li><FontAwesomeIcon icon={faPlusCircle} size="2x" />  Szívesen támogatjuk azokat a cégeket és <br />magánszemélyeket, akik rendelkeznek <br />valamilyen újító ötlettel.</li>
                            </ul>
                        </Col>
                    </Row>

                </Zoom>

                <Zoom>
                    <Row>
                        <Col xs={12}><div className="line" /></Col>
                        <Col xs={12}>
                            <div className="map" ref={this.myMap}><iframe title="RESINEMAT Map" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;hl=hun&amp;q=Tatab%C3%A1nya,%20Resinemat%20Kft.,%20Tavaszmez%C5%91%20utca+(Resinemat%20Kft.)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameBorder="0"></iframe></div>
                        </Col>
                    </Row>

                </Zoom>
            </Container>
        );
    }
}

export default Home;