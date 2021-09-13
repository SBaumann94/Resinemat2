import React from 'react';

import pic1 from './resources/pictures/1.png'
import pic2 from './resources/pictures/2.jpg'
import pic3 from './resources/pictures/3.jpg'

const text1 ="Géppark"
const text2 ="Célgéptervezés"
const text3 ="Prototípus fejlesztés"
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
            <img className={"main-image "} alt={"picture " + this.props.picCode} width={this.state.width/6} height={this.state.width/6}
                src={this.props.picCode === 1 ? pic1 : this.props.picCode === 2 ? pic2 : pic3}  />
            <h5 className={"text-below-image "}>{this.props.picCode === 1 ? text1 : this.props.picCode === 2 ? text2 : text3}</h5>
        </div >);
    }
}

export default ImageWithText;