import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render (){
    return (
      <div>
        <div className="container" style={{marginBottom: 80}}>
          <h2 className="section-head text-center">Sorry, this page can't be found.</h2>
          <p className="text-center big-info">This page doesn't exist. It may have been moved. Or maybe the URL is incorrect.</p>
          <div className="text-center">
            <Link to="/">
              <button className="blackOutlineButton">Return home</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default NotFound;