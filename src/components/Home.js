import React, { Component } from 'react';
import Slider from './Slider/Slider';
import Header from './Containers/Header';
import Grid from './Containers/Grid';

export default class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Header />
        <Slider />
        <Grid />
      </div>
    );
  }
}
