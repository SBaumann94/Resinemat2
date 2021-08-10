import React from 'react';

import pic1 from './resources/pictures/1.jpg'
import pic2 from './resources/pictures/2.jpg'
import pic3 from './resources/pictures/3.jpg'

const text1 =
    <div>
        <ul><h4>Géppark:</h4>
            <li>CNC megmunkáló központ (4D) </li>
            <li>CNC maró</li>
            <li>CNC eszterga </li>
            <li>Optikai köszörű </li>
            <li>Szikraforgácsolás (Huzalszikra, Tömbszikra)</li>
        </ul>
    </div>
const text2 =
    <div>
        <ul><h5>Célgéptervezés:</h5>
            <li>Célgépek</li>
            <li>Funkcionális vasszerkezetek</li>
            <li>Ponthegesztő gépek</li>
            <li>Villamos vezérlések</li>
            <li>Automatizálás</li>
        </ul>
    </div>
const text3 =
    <div>
        <ul>
            <h5>Prototípus fejlesztés:</h5>
            <li>Kotyogó berendezés</li>
            <li>Csoda ásó</li>
        </ul>
    </div>
const timer = 3000 //images appear 3 second after load

class ImageWithText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theposition: 0,
            passed: false,
            width: 0,
            height: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
        this.interval = setInterval(() => this.setState({ passed: true }), timer);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
        clearInterval(this.interval);
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            theposition: scrolled,
        })
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        return (
        <div className={"main-image-div "}>
            <img className={"main-image "} alt={"picture " + this.props.picCode}
                src={this.props.picCode === 1 ? pic1 : this.props.picCode === 2 ? pic2 : pic3} width="100%" />
            <p className={"text-on-image "}><span>{this.props.picCode === 1 ? text1 : this.props.picCode === 2 ? text2 : text3}</span></p>
        </div >);
    }
}

export default ImageWithText;