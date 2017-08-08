import React, { Component } from 'react';
import ReactTouchEvents from 'react-touch-events';
import ReactTimerMixin from 'react-timer-mixin';
import axios from 'axios';
import Slide from './Slide';
import Dots from './Dots';

require('./style.scss');

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: [],
      current: undefined,
      ready: false,
      active: true
    }

    this.images = [];
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.dotClick = this.dotClick.bind(this);
    this.preloadNextImage = this.preloadNextImage.bind(this);
    this.slideshowDelay = 5000;
  }

  componentWillMount() {
    axios.get('slider-config.json')
    .then((res) => {
      this.setImageArray(res.data);
    });
  }

  componentDidMount() {
    this.progressSlideshow();
  }

  progressSlideshow() {
    if( this.state.active ) {
      ReactTimerMixin.setTimeout(function () {
        this.nextSlide();
        this.progressSlideshow();
      }.bind(this), this.slideshowDelay);
    }
  }

  setImageArray(imageArray) {
    let newArray = [];
    for(let i = 0; i < imageArray.length; i++) {
      newArray.push(imageArray[i].image);
    }
    this.images = newArray;
    this.setState({ background: newArray, current: 0, ready: true });
  }

  preloadNextImage() {
    let current = this.state.current;
    let background = this.state.background;

    if( (current != undefined) && (current < background.length - 1) )
      return (
        <div style={{display: 'none', height:'100%', backgroundImage: `url(${(this.state.background[this.state.current + 1])}.jpg)`, transition: '1s'}}></div>
      )
    else
      return null
  }

  previousSlide() {
    let current = this.state.current;
    let imageArray = this.state.background.length - 1;

    if(current >= 1)
      this.setState({ current: current - 1 })
    if(current === 0)
      this.setState({ current: imageArray })
  }

  nextSlide() {
    let current = this.state.current;
    let imageArray = this.state.background.length - 1;

    if((current >= 0) && (current !== imageArray))
      this.setState({ current: current + 1 })
    if(current === imageArray) {
      this.setState({ current: 0 })
    }
  }

  dotClick(dotIndex) {
    this.setState({ current: dotIndex })
  }

  handleSwipe(direction) {
    switch (direction) {
      case "left":
        this.state.active = false;
        this.nextSlide();
        //this.state.active = true;
        break;
      case "right":
        this.state.active = false;
        this.previousSlide();
        //this.state.active = false;
    }
  }

  render() {
    return (
      <ReactTouchEvents onSwipe={ this.handleSwipe.bind(this) } >
        <div className="slider">

          {
            this.state.ready ?
            <Slide
              background={this.state.background}
              current={this.state.current}
              ready={this.state.ready}
            />
            : null
          }

          <Dots
            numberOfDots={this.state.background.length}
            isCurrent={this.state.current}
            dotClick={this.dotClick}
           />

           {this.preloadNextImage()}
        </div>
      </ReactTouchEvents>
    );
  }
}
