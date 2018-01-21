import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Success from '../pages/Success';
import NotFound from '../pages/NotFound';

export default class Routes extends React.Component {
  constructor(){
    super();
    this.state = {
      language: 'EN'
    }
    this.switchEnglish = this.switchEnglish.bind(this);
    this.switchChinese = this.switchChinese.bind(this);
  }

  switchEnglish(){
    this.setState({language: 'EN'})
  }

  switchChinese(){
    this.setState({language: 'ZH'})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route component={ScrollToTop} />
          <Switch>
            <Route path="/" exact component={() => (<Home English={this.switchEnglish} Chinese={this.switchChinese} language={this.state.language} />)}/>
            <Route path="/contact" exact component={() => (<Contact language={this.state.language} />)}/>
            <Route path="/success" exact component={() => (<Success language={this.state.language} />)}/>
            <Route path="*" component={() => (<NotFound language={this.state.language} />)}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};