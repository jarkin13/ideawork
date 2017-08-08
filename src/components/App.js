import React, { Component } from 'react';
require('./global.scss');

export default class extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}
