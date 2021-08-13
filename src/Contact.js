import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'



class Contact extends React.Component {
    render() {
        return (
            <div className="contact-div">
                <h2>Kapcsolat</h2>
                <Container>
                    <h4>Küldjön üzenetet</h4>
                    {/*<EmailForm/>*/}
                    <Row>
                        <Col xs={12}><div className="line" /></Col>
                        <Col xs={12} sm={6} lg={4}>
                            <p>Resinemat Kft<br />
                                Tulajdonos: Rabi Endre <br />
                                Adószám: 11477930-2-11
                            </p>
                        </Col>
                        <Col xs={12} sm={6} lg={4}>
                            <p>
                                <FontAwesomeIcon icon={faPhoneAlt} size="2x" />Telefon: +36(34)319-134<br />
                                <FontAwesomeIcon icon={faMobileAlt} size="2x" /> Mobil: +36(70)930-4890
                            </p>
                        </Col>
                        <Col xs={12} sm={12} lg={4}>
                            <p>Székhely: 2800 Tatabánya Banyi János utca 49. <br />
                                Telephely: 2800 Tatabánya Tavaszmező u 4/b.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}><div className="line" /></Col>
                        <Col xs={12}>
                            <div className="map" ref={this.myMap}><iframe title="RESINEMAT Map" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;hl=hun&amp;q=Tatab%C3%A1nya,%20Resinemat%20Kft.,%20Tavaszmez%C5%91%20utca+(Resinemat%20Kft.)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0"></iframe></div>
                        </Col>
                    </Row>
                </Container>

            </div>);
    }
}

export default Contact;