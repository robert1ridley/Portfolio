import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import formContent from '../content/formContent';
import '../styles/contact.css';
import logo from '../images/logo.jpg';

import ContactForm from '../components/ContactForm';

export default class Contact extends React.Component {
  render() {
    let data = this.props.language==='ZH'? formContent.chinese: formContent.english;
    return (
      <div className="background">
        <div className="circle" style={styles.close}>
          <Link to="/" className="white">
            <div style={styles.fill}>
              <i className="fa fa-times social" aria-hidden="true"></i>
            </div>
          </Link>
        </div>
        <div className="text-center">
          <Link to="/" className="white">
            <Image src={logo} className="logo" />
          </Link>
        </div>
        <div className="container" style={{color: 'white'}}>
          <Row>
            <Col md={2} sm={1}/>
            <Col md={8} sm={10}>
              <h2 className="section-head text-center" style={{marginTop: 30}}>
                {data.head}
              </h2>
              <p className="text-center big-info" style={{marginBottom: 40}}>
                {data.body}
              </p>
              <ContactForm language={this.props.language}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

const styles = {
  close: {
    position: 'fixed',
    top: 30,
    right: 30
  },
  fill: {
    width: 40,
    height: 40 
  }
}