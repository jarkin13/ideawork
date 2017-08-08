import React, { Component } from 'react';

const Slide = (props) => {
  const current = props.background[props.current];

  const styles = {
    imageBackground: {
      backgroundImage: `url(${current}.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  }
  return <div className="slide" style={styles.imageBackground}></div>
}

export default Slide;
