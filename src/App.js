import React, { Component } from 'react';
import './App.css';
import './libs/bootstrap/css/bootstrap.min.css';
import './libs/font-awesome/css/font-awesome.min.css';

// Component imports
import Routes from './routes/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
