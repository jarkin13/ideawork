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

  function createMarkup(html) { 
    return {__html: html}; 
  };

  return (
    <div className="slide" style={styles.imageBackground}>
      <div className="slide-text">
        <h1><div dangerouslySetInnerHTML={ createMarkup(props.title[props.current]) } /></h1>
        <h2>{props.date[props.current]}</h2>
        <p>{props.text[props.current]}</p>
      </div>
    </div>
  )
}

export default Slide;
