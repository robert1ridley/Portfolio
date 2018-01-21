import React from 'react';

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    console.log(this.state.intervalId)
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <button style={styles.scroll} title='Back to top' className='scroll' 
               onClick={ () => { this.scrollToTop(); }}>
                <span style={styles.arrowUp} className='glyphicon glyphicon-arrow-up'></span>
              </button>;
   }
} 

export default class ScrollTo extends React.Component {  
  render () {
    return (
      <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
    )
  }
}

const styles = {}

styles.scroll = {
  opacity: 0.8,
  backgroundColor: 'transparent',
  width: 60,
  height: 60,
  position: 'fixed',
  bottom: 10,
  right: 10,
  borderRadius: 30,
  border: 'none',
  fontSize: 30
}

styles.none = {
  display: 'none'
}

styles.arrowUp = {
  color: '#fc706f'
}