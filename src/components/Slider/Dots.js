import React, { Component } from 'react';
import Dot from './Dot';

const Dots = ({ numberOfDots, isCurrent, dotClick}) => {

  let dotsCount = [];
  
  for(let i = 0; i < numberOfDots; i++) {
    let name = (isCurrent === i) ? "isCurrent dot" : "dot";
    dotsCount.push(<Dot key={i} name={name} dotClick={dotClick} dotIndex={i} />)
  }

  return (
    <div className="dotsContainer">
      {dotsCount}
    </div>
  )
}

export default Dots
