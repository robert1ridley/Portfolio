import React from 'react';
import { Link } from 'react-router-dom';

import successContent from '../content/successContent';

export default class Success extends React.Component {
  render() {
    console.log(this.props.language)
    let data = this.props.language==='ZH'? successContent.chinese: successContent.english;
    return (
      <div style={styles.outer}>
        <div className="container text-center">
          <h1 style={{marginTop: '30vh'}}>{data.head}</h1>
          <p className="med-info">{data.body}</p>
          <Link to="/">
            <button className="transButton-success">{data.button}</button>
          </Link>
        </div>
      </div>
    )
  }
}

const styles = {
  outer: {
    minHeight: '100vh',
    backgroundColor: '#fc706f',
    color: 'white'
  }
}