import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Zoom from 'react-reveal/Zoom';
import { Container, Row, Col } from 'react-bootstrap';

import pic0 from './resources/pictures/1.png';
import pic1 from './resources/pictures/2.jpg';
import pic2 from './resources/pictures/3.jpg';
import pic3 from './resources/pictures/4.jpg';
import pic4 from './resources/pictures/5.jpg';
import pic5 from './resources/pictures/6.jpg';
import pic6 from './resources/pictures/7.jpg';
import picMain from './resources/pictures/123.jpg'

import GDImageViewer from './GDImageViewer';
import './GDImageViewer.css';


const slideImages = [pic0, pic1, pic2, pic3, pic4, pic5, pic6];
const slideProperties = {
    duration: 5000,
    pauseOnHover: false,
    canSwipe: false
};

const GDProps={
    gkey: process.env.GOOGLE_API_KEY,
    dirId: process.env.GOOGLE_DRIVE_PUBLIC_DIRECTORY_ID,
    name: "GDProps",
    options: {
        // react style object
        // https://reactjs.org/docs/dom-elements.html#style
    
        style: {
        },
    
        // behavior when image is clicked
        // if on click is empty (no modal or newWindow)
        // current tab will show full image
        // if modal true, image opens as overlay
        // on current tab
        // if new window is true, new tab is launched
        // with image url
    
        onClick: {
            modal: true,
            newWindow: false
        },
        
        //Use name of <FILE_NAME>.<EXTENSION> (image.png) to 
        // specify which images not to render
    
        exclude: {
            "1.jpg": true
        },
    
    
        //Use name of <FILE_NAME>.<EXTENSION> (image.png) to
        //attach className attribute to a specific image
    
        attachClass: {
            "2.jpg": "test"
        },
    
    
        //Use name of <FILE_NAME>.<EXTENSION> (image.png) to
        //attach id attribute to a specific image
    
        attachId: {
            "2.jpg": "test2"
        },
    
    
    
        // if set true, hover over opacity effect
        // will be set
    
        hover: true
    }
}


//test

class About extends React.Component {
    render() {
        return (
            <div className="about-div">
                <h2>Rólunk</h2>
                <Zoom>
                    <Container className="">
                        <Row className="">
                            <GDImageViewer data={GDProps}/>
                        </Row>
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
                                <h4 className=" text-center main-text">Célgép tervezés:</h4>
                                <ul className="sub-text">
                                    <li>Funkcionális vasszerkezetek</li>
                                    <li>Ponthegesztő gépek</li>
                                    <li>Villamos vezérlések</li>
                                    <li>Automatizálás</li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={6} md={4} >
                                <h4 className=" text-center main-text">Prototípus fejlesztés:</h4>
                                <ul className="sub-text">
                                    <li>Kotyogó berendezés</li>
                                    <li>Csoda ásó</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Zoom>
                <div className="line" />
                <Slide {...slideProperties} className="slide-container">
                    <div><div className="each-slide" style={{ 'backgroundImage': `url(${slideImages[0]})` }}></div></div>
                    <div><div className="each-slide" style={{ 'backgroundImage': `url(${slideImages[1]})` }}></div></div>
                    <div><div className="each-slide" style={{ 'backgroundImage': `url(${slideImages[2]})` }}></div></div>
                    <div><div className="each-slide" style={{ 'backgroundImage': `url(${slideImages[3]})` }}></div></div>
                    <div><div className="each-slide" style={{ 'backgroundImage': `url(${slideImages[4]})` }}></div></div>
                    <div><div className="each-slide" style={{ 'backgroundImage': `url(${slideImages[5]})` }}></div></div>
                    <div><div className="each-slide" style={{ 'backgroundImage': `url(${slideImages[6]})` }}></div></div>
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
                <div className="line" />

            </div>);
    }
}

export default About;