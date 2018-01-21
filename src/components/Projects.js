import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import projectsContent from '../content/projectsContent';

import stem from '../images/stem.png';
import wisdom from '../images/wisdom.png';
import portfolio from '../images/portfoliov2.png';


class Stem extends React.Component {
  render() {
    return (
      <div>
        <Row style={{marginTop: 40, marginBottom: 50}}>
          <Col md={6} style={{marginTop: 40}}>
            <h2 className="mini-head text-center" style={styles.noMargin}>{this.props.content.projectName}</h2>
            <p className="text-center caption">{this.props.content.jobTitle}</p>
            <p className="med-info">{this.props.content.projectDescription}</p>
            <div className="text-center">
              <a href="http://www.stemcloud.cn/cloudclassroom/index" target="_blank">
                <button className="viewButton">{this.props.content.buttonText}</button>
              </a>
            </div>
          </Col>
          <Col md={6} style={{marginTop: 40}}>
            <div className="text-center">
              <Image src={stem} width="100%" responsive/>
            </div>
          </Col>
        </Row>
        <hr className="divide"/>
      </div>
    )
  }
}

class Wisdom extends React.Component {
  render() {
    return (
      <div>
        <Row style={{marginTop: 40, marginBottom: 50}}>
          <Col md={6} style={{marginTop: 40}}>
            <div className="text-center">
              <Image src={wisdom} width="100%" responsive/>
            </div>
          </Col>
          <Col md={6} style={{marginTop: 40}}>
            <h2 className="mini-head text-center" style={styles.noMargin}>{this.props.content.projectName}</h2>
            <p className="text-center caption">{this.props.content.jobTitle}</p>
            <p className="med-info">{this.props.content.projectDescription}</p>
            <div className="text-center">
              <a href="https://wisdom-main.herokuapp.com/" target="_blank">
                <button className="viewButton">{this.props.content.buttonText}</button>
              </a>
            </div>
          </Col>
        </Row>
        <hr className="divide"/>
      </div>
    )
  }
}

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Row style={{marginTop: 40, marginBottom: 50}}>
          <Col md={6} style={{marginTop: 40}}>
            <h2 className="mini-head text-center" style={styles.noMargin}>{this.props.content.projectName}</h2>
            <p className="text-center caption">{this.props.content.jobTitle}</p>
            <p className="med-info">{this.props.content.projectDescription}</p>
            <div className="text-center">
              <a href="/">
                <button className="viewButton">{this.props.content.buttonText}</button>
              </a>
            </div>
          </Col>
          <Col md={6} style={{marginTop: 40}}>
            <div className="text-center">
              <Image src={portfolio} width="100%" responsive/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}


export default class Projects extends React.Component {
  render () {
    let content = this.props.language==='ZH'? projectsContent.chinese: projectsContent.english;
    return (
      <div style={{backgroundColor: '#eee'}}>
        <div className="container">
          <h2 className="section-head text-center">{content.head}</h2>
          <p className="text-center big-info">{content.body} <a href="mailto:robert.n.ridley@gmail.com?Subject=Project%20Request" target="_top">{content.email}</a></p>
          <Stem content={content.projects.stem}/>
          <Wisdom content={content.projects.wisdom}/>
          <Portfolio content={content.projects.portfolio}/>
        </div>
      </div>
    )
  }
}

const styles = {
  noMargin: {
    marginBottom: 5
  }
}
