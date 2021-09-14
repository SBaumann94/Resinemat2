import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import pic0 from './resources/pictures/1.png';
import pic1 from './resources/pictures/2.jpg';
import pic2 from './resources/pictures/3.jpg';
import picMain from './resources/pictures/123.jpg'
import { Container, Row, Col } from 'react-bootstrap';

const slideImages = [pic0, pic1, pic2];
const slideProperties = {
    duration: 5000,
    pauseOnHover: false,
    canSwipe: false
};
class About extends React.Component {
    render() {
        return (
            <div className="about-div">
                <h2>Rólunk</h2>
                <Container className="">
                    <Row className="">
                        <Col xs={12}>
                            <img className='about-main-pic' alt={"Rólunk_fő_kép"} src={picMain} />
                        </Col>
                    </Row>
                    <Row className="">
                        <Col xs={12} sm={6} md={4} >
                            <h4 className="text-center main-text">Géppark:</h4>
                            <ul className="sub-text">
                                <li>CNC megmunkáló központ (4D) </li>
                                <li>CNC maró</li>
                                <li>CNC eszterga</li>
                                <li>Optikai köszörű</li>
                                <li>Szikraforgácsolás<ul className="sub-text">
                                    <li>Huzalszikra</li>
                                    <li>Tömbszikra</li></ul>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={4} >
                            <h4  className=" text-center main-text">Célgép tervezés:</h4>
                        </Col>
                        <Col xs={12} sm={6} md={4} >
                            <h4  className=" text-center main-text">Prototípus fejlesztés:</h4>
                        </Col>
                    </Row>
                </Container>
                <div className="line" />
                <Slide {...slideProperties} className="slide-container">
                    <div><div className="each-slide" style={{ 'backgroundImage': `url(${slideImages[0]})` }}></div></div>
                    <div><div className="each-slide" style={{ 'backgroundImage': `url(${slideImages[1]})` }}></div></div>
                    <div><div className="each-slide" style={{ 'backgroundImage': `url(${slideImages[2]})` }}></div></div>
                </Slide>
                <div className="line" />
                <h3>Cégünk története</h3>
                <p className="about-text">
                    A Resinemat Kft. 1997-ben lett alapítva, egy családi mikrovállalkozásként.<br /> Büszkék vagyunk rá, hogy a vállalkozás az eltelt 24 év alatt is megőrizte a családias környezetét, ugyanakkor komoly szakértelemmel és mérnöki precizitással szolgálja ki jelenlegi és jövőbeni megrendelőinek egyedi igényeit. <br />Kezdetben a fő profilunk a lemezhajlítás volt, melyet elektronikai alkalmazásokban használtak fel. A megyében az elsők között kezdtünk foglalkozni forgácsolással, ezáltal mára az egyik legnagyobb tapasztalattal rendelkező mikrovállalattá váltunk a megmunkálás területén.
                    <br />Célunk a kezdetektől fogva, a térségben felmerülő speciális, kreativitást igénylő megmunkálási igények kielégítése. Vállaljuk kis és közepes sorozatszámú, egyedi alkatrészek, valamint komplett célgépek tervezését és kivitelezését.
                    <br />Úgy gondoljuk, hogy a mai modern világban a mechatronikai megoldások jelentik a jövőt. <br />Ezt szem előtt tartva, olyan egyedi igényeket kiszolgáló berendezések tervezését és kivitelezését vállaljuk, ahol fontos, hogy a részterületek integrációja révén, komplexebb feladatok megoldására is alkalmas legyen az adott berendezés.
                    <br />Partnereink között megtalálható sok, a térség gazdaságát befolyásoló multinacionális vállalat, valamint több kisebb, ám annál meghatározóbb helyi vállalkozás. Külföldi megrendelőinknek köszönhetően, az általunk gyártott alkatrészeket és berendezéseket sikerrel <strong>exportáltuk Ausztriába, Romániába, Olaszországba, valamint Kínába is.</strong>
                    <br />Mint egyszer minden vállalkozás életében, így cégünknél is eljött a generációváltás ideje. Ezzel együtt, új területek felé is szeretnénk nyitni, azonban fontosnak tartjuk, hogy a Nagyapáink által teremtett értékeket és szakértelmet a legjobb tudásunk szerint megőrizzük, megtartva ezzel megrendelőink belénk fektetett bizalmát.
                    <br />Bízunk benne, hogy Önt is mihamarabb a partnereink között köszönthetjük!
                </p>
                <h5>Rabi Endre, ügyvezető</h5>

            </div>);
    }
}

export default About;