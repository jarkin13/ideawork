import React, { Component } from 'react';
import Slider from './Slider/Slider';
import Header from './Containers/Header';
import Grid from './Containers/Grid';
import Footer from './Containers/Footer';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Slider />
          <Grid />
        </div>
        <Footer />
      </div>
    );
  }
}
