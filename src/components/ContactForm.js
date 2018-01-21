import React from 'react';
import { Form, FormGroup, FormControl, Alert, HelpBlock } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import loader from '../images/loader.gif';

const placeholders = {
  chinese:
    {
      name: "名字",
      email: "电子邮件",
      message: "留言",
      send: "提交您的项目"
    },
  english:
    {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Submit your project"
    }
}

export default class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      status: '',
      errors: {},
      loading: false
    }
    this.sendEmail = this.sendEmail.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  updateData(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  sendEmail(event){
    event.preventDefault()
    this.setState({errors: {}, loading: true})
    axios.post('/consult', this.state).then(
      (response) => {this.setState({status: 'success', loading: false})},                                     
      ( err ) => this.setState({ errors: err.response.data, loading: false})
    )
  }

  render () {
    let data = this.props.language === "ZH"? placeholders.chinese: placeholders.english;
    return (
      <Form onSubmit={(event) => this.sendEmail(event)}>
        {this.state.status==='success'? <Redirect to="/success"/>: null}
        <FormGroup bsSize="large">
          <FormControl 
            type="name" 
            name="name" 
            placeholder={data.name} 
            className="form-entry"
            value={this.state.name}
            onChange={this.updateData} 
            style={styles.formItems}
            required
          />
          {this.state.errors.name? <HelpBlock>{this.state.errors.name}</HelpBlock>: null}
        </FormGroup>
        <FormGroup bsSize="large">
          <FormControl
            type="email" 
            name="email" 
            placeholder={data.email} 
            className="form-entry"
            value={this.state.email}
            onChange={this.updateData} 
            style={styles.formItems}
            required
          />
          {this.state.errors.email? <HelpBlock>{this.state.errors.email}</HelpBlock>: null}
        </FormGroup>
        <FormGroup controlId="formControlsTextarea" bsSize="large">
          <FormControl 
            componentClass="textarea" 
            name="message" 
            placeholder={data.message} 
            className="form-entry"
            value={this.state.message}
            onChange={this.updateData}
            style={styles.bigForm}
            required
          />
          {this.state.errors.message? <HelpBlock>{this.state.errors.message}</HelpBlock>: null}
        </FormGroup>
        <div className="text-center" style={{marginBottom: 30}}>
          <button 
            className={this.state.loading? "greyed transButton": "transButton"} 
            type="submit" 
            disabled={this.state.loading}
          >
            {data.send}&nbsp;&nbsp;
            {this.state.loading===true? <img src={loader} height="20" width="20"/>: null}
          </button>
        </div>
      </Form>
    )
  }
}

const styles = {
  formItems: {
    backgroundColor: 'transparent',
    color: 'white'
  },

  bigForm: {
    height: 150,
    backgroundColor: 'transparent',
    color: 'white'
  },
  invisible: {
    display: 'none'
  },
  visible: {
  
  }
}