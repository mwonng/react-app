import React, { Component } from 'react';
import './Carousel.scss';
import Swipeable from 'react-swipeable'
import banner01 from './img/banner-01.png';
import banner02 from './img/banner-02.png';
import banner03 from './img/banner-03.png';
import banner04 from './img/banner-04.png';
import Indicator from './Indicator';
const RIGHT = '-1';
const LEFT = '+1';
class Carousel extends Component {
  constructor(props) {
    super(props)
    const arrayImg = [banner01,banner02,banner03, banner04];
    this.state = {
      currentIndex: 0,
      length: arrayImg.length,
      arrayImg: arrayImg,
      autoplay: props.autoplay,
      interval: props.interval,
      imageIdx: 0
    }
  }
  componentDidMount() {
    if (this.state.autoplay === true) {
      this.interval = setInterval( () => this.nextSlide(), parseInt(this.state.interval,10));
    }
    // document.getElementById('prevBtn').style.backgroundColor = "#ff0000";
  }

  componentWillUnmount() {
    if (this.state.autoplay === true) {
      clearInterval(this.interval);
    }
  }

  nextSlide = () => {
    const {length, currentIndex} = this.state;
    currentIndex < length-1 ?
      this.setState({currentIndex: currentIndex+1}):
      this.setState({currentIndex: 0})
  }
  prevSlide = () => {
    const {currentIndex, length} = this.state;
    currentIndex > 0 ?
      this.setState({currentIndex: currentIndex-1}):
      this.setState({currentIndex: length-1})
  }
  dotAction = (index) => {
    this.setState({
      currentIndex: index
    })
  }

  render() {
    const {currentIndex, arrayImg} = this.state;
    const { width } = this.props;
    const ulStyle = {
      maWidth: `${width}px`,
      width: `${width}px`,
      height: `${width*0.4}px`
    };
    const imgStyle = {
      maxWidth: `${width}px`,
      width: `${width}px`
    };
    const img = arrayImg.map( (a,i) => {
      return(<li key={i} className={currentIndex === i? "current":"hide"}><img src={a} style={imgStyle} alt="01"/></li>)
    });
    return (
      <div className="carousel">
        <Swipeable
          trackMouse
          style={{ touchAction: 'none' }}
          preventDefaultTouchmoveEvent
          onSwipedLeft={()=>this.nextSlide()}
          onSwipedRight={()=>this.prevSlide()}
        >
          <ul style={ulStyle}>
            {img}
            <span className="prevBtn" id="prevBtn" onClick={this.prevSlide}> <i className="left"></i> </span>
            <span className="nextBtn" onClick={this.nextSlide}><i className="right"></i></span>
            <Indicator carouselNum={arrayImg.length} dotAction={this.dotAction} currentIndex={this.state.currentIndex}/>
          </ul>
        </Swipeable>
      </div>
    );
  }
}

export default Carousel;
