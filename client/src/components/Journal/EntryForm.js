import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import styled from 'styled-components'


const EntryFormStyle = styled.div `
width: 400px;
height: 210px;
display: center;
margin-bottom: 50px;
`

class EntryForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      content : "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event){
  console.log (event.target.value);
  const attributeName = event.target.name;
  const  attributeValue = event.target.value;
  const newState = {...this.state}
  newState[attributeName] = attributeValue;
    this.setState(newState);
}

handleSubmit(event){
    console.log('POSTING')
    axios.post(`/api/entry/${this.props.journal._id}`, this.state).then(res => {
      console.log('POSTING')
      console.log(this.props.journal);
    }).catch( (err) => console.log(err));
}

render(){
  
    return(
         <form onSubmit={this.handleSubmit}>
          <h4>My Daily Journal</h4>
          <br/>
          <br/>
          <input type="text" name ="content" value={this.state.content} 
            onChange={(e) => this.handleChange(e)} />
            <input type="submit"/>
            </form>
    )
  }
}
export default EntryForm;