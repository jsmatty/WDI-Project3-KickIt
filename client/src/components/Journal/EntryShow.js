import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import styled from 'styled-components'


const EntryShowStyle = styled.div `
width: 400px;
height: 210px;
display: center;
margin-bottom: 50px;
`

class EntryShow extends Component {
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
    event.preventDefault();
    const entry = this.props.match.params.id
    console.log(this.props)
    axios.put(`/api/entry/${entry}`, {
      content: this.state.content
    }).then(res => {
      console.log('POSTING')
      console.log(res);
    }).catch( (err) => console.log(err));
}

render(){
    return(
         <form onSubmit={this.handleSubmit}>
          <h4>Edit Journal Entry</h4>
          <br/>
          <br/>
          <input type="text" name ="content" value={this.state.content}
            onChange={(e) => this.handleChange(e)} />
            <input type="submit" value='BLAHHH'/>
          </form>
     )
   }
}
export default EntryShow;