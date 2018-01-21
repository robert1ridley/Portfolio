import React, { Component } from 'react';

// Component imports
import Head from '../components/Head';
import Expertise from '../components/Expertise';
import Projects from '../components/Projects';
import ScrollButton from '../components/ScrollButton';
import Collaborate from '../components/Collaborate';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    console.log(this.props.language)
    return (
      <div>
        <Head 
          Chinese={this.props.Chinese}
          English={this.props.English}
          language={this.props.language}
        />
        <Expertise language={this.props.language}/>
        <Projects language={this.props.language}/>
        <Collaborate language={this.props.language}/>
        <Footer language={this.props.language}/>
        <ScrollButton language={this.props.language}/>
      </div>
    );
  }
}

export default Home;
