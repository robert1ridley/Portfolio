import React from 'react';
import { Row, Col } from 'react-bootstrap';
import expertiseContent from '../content/expertiseContent';

export default class Expertise extends React.Component {
  render () {
    let content = this.props.language==='ZH'? expertiseContent.chinese: expertiseContent.english;
    let items = content.skills.map((item, index)=>
      <Col md={4} sm={4} style={{marginTop: 40}} key={index}>
        <div className="text-center">
          <i className={`${item.icon} expertise-icon`} aria-hidden="true" style={{fontSize: '4em'}} />
          <h2 className="mini-head">{item.head}</h2>
          <p className="med-info">{item.body}</p>
        </div>
      </Col>
    )
    return (
      <div className="container" style={{marginBottom: 80}}>
        <h2 className="section-head text-center">{content.head}</h2>
        <p className="text-center big-info">{content.body}</p>
        <Row style={{marginTop: 40}}>
          {items}
        </Row>
      </div>
    )
  }
}
