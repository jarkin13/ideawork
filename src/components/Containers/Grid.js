import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import axios from 'axios';

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentWillMount() {
    axios.get('grid-config.json')
    .then((res) => {
      this.setImageArray(res.data);
    });
  }

  setImageArray(imageArray) {
    let newArray = [];
    for(let i = 0; i < imageArray.length; i++) {
      newArray.push(imageArray[i]);
    }
    this.setState({ images: newArray });
   }

  render() {
    const postData = this.state.images;
    const posts = Object.keys(postData).map(function(keyName, keyIndex) {
      let image = require('../../../dist/grid-images/' + postData[keyIndex].image + '.jpg');
      let title = postData[keyIndex].title;
      let date = postData[keyIndex].date;
      let presentby = postData[keyIndex].presentby;
      let imageStyles = {
        marginBottom: '35px',
        width: '100%'
      }
      
      return (
        <div className="item" key={keyIndex}>
          <img src={image} style={imageStyles} />
          <span className="date">{date}</span>
          <h1><a href="#">{title}</a></h1>
          <p>Presented by <a href="#">{presentby}</a></p>
        </div>
      )
    });

    let masonryOptions = {
      transitionDuration: 0,
      itemSelector: '.item',
      percentPosition: true,
      columnWidth: '.grid-sizer',
      horizontalOrder: true
    };

    return (
      <div className="wraper">
        <div className="grid">
          <Masonry
            className={'masonry'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            <div className="grid-sizer"></div>
           {posts}
          </Masonry>
        </div>
      </div>
    );
  }
}
