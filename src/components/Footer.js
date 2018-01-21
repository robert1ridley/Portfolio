import React from 'react';
import { Image } from 'react-bootstrap';

import logo from '../images/logo.jpg';

export default class Footer extends React.Component {
  render () {
    return (
      <div className="text-center" style={{backgroundColor: '#252a30', paddingBottom: 40}}>
        <Image src={logo} className="logo-small"/>
        <p className="small-info">{this.props.language==='ZH'? 'Robert Ridley创造的 © 2018。' : 'Created by Robert Ridley © 2018.'}</p>
        <div className="circle">
          <a className="white" href="https://twitter.com/robertnridley1" target="_blank">
            <div style={styles.fill}>
              <i className="fa fa-twitter social" aria-hidden="true"></i>
            </div>
          </a>
        </div>
        <div className="circle">
          <a className="white" href="https://www.linkedin.com/in/robert-ridley-780240a8/" target="_blank">
            <div style={styles.fill}>
              <i className="fa fa-linkedin social" aria-hidden="true"></i>
            </div>
          </a>
        </div>
        <div className="circle">
          <a className="white" href="https://github.com/robert1ridley" target="_blank">
            <div style={styles.fill}>
              <i className="fa fa-github social" aria-hidden="true"></i>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

const styles = {
  fill: {
    width: 40,
    height: 40
  }
}