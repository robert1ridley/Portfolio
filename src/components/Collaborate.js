import React from 'react';
import { Link } from 'react-router-dom';

import collaborateContent from '../content/collaborateContent';

export default class Collaborate extends React.Component {
  render () {
    let content = this.props.language==='ZH'? collaborateContent.chinese: collaborateContent.english;
    return (
      <div style={{backgroundColor: '#fc706f', paddingBottom: 20}}>
        <div className="container" style={{marginBottom: 80}}>
          <h2 className="section-head text-center">{content.head}</h2>
          <p className="text-center big-info">{content.body}</p>
          <div className="text-center">
            <Link to="/contact">
              <button className="blackOutlineButton">{content.button}</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}