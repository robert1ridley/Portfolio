import React from 'react';
import { Image } from 'react-bootstrap';
import Scroll from 'react-scroll';

import headContent from '../content/headContent';

import headImg from '../images/headImg.jpg';
import logo from '../images/logo.jpg';
import UKFlag from '../images/UKflag.png';
import chinaFlag from '../images/chinaFlag.png';

let scroll = Scroll.animateScroll;

export default class Head extends React.Component {
  scrollTo() {
    scroll.scrollTo(750);
  }

  scrollBottom(){
    scroll.scrollToBottom();
  }

  render(){
    console.log(this.props.language)
    let content = this.props.language==='ZH'? headContent.chinese: headContent.english
    return (
      <div className="head-div" style={styles.head}>
        <div className="overlay">
          <div style={{textAlign: 'center'}} className="container" >
            <div className="flags">
              <div className="icon" onClick={this.props.English}>
                <Image src={UKFlag} className="flag-icon" aria-hidden="true"></Image>
                <span className="med-info" style={{color: 'white'}}>&nbsp;&nbsp;English</span>
              </div>
              <div className="icon" onClick={this.props.Chinese}>
                <Image src={chinaFlag} className="flag-icon" aria-hidden="true"></Image>
                <span className="med-info" style={{color: 'white'}}>&nbsp;&nbsp;中文</span>
              </div>
            </div>
            <Image src={logo} className="logo" />
            <h1 className="main-head">{content.intro}</h1>
            <button className="transButton" onClick={this.scrollBottom}>{content.workOffer}</button>
            <div className="info-scroll" onClick={this.scrollTo}>
              <p>{content.learnMore}</p>
              <span className="glyphicon glyphicon-chevron-down" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  head: {
    backgroundImage: 'url(' + headImg + ')'
  }
}