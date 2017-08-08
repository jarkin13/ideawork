import React, { Component } from 'react';
import Logo from './logo.png';

export default class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="wraper">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#"><img src={Logo} style={{width: 196, height: 36}} /></a>
            </div>
            <div className="navbar-collapse collapse pull-right">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <a href="#">212.555.5555</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a className="hamburger" type="button">
                    <span className="lnr lnr-menu"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
