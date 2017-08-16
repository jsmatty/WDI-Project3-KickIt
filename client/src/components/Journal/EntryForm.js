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
      //meter : ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event){
  // set variables for our elements, their name attributes, and their values
  console.log (event.target.value);
  const attributeName = event.target.name;
  const  attributeValue = event.target.value;
  const newState = {...this.state}
  newState[attributeName] = attributeValue;
// Set the state with our newState object
    this.setState(newState);
}

handleSubmit(event){
    // event.preventDefault();
    console.log('POSTING')
    axios.post(`/api/entry/${this.props.journal._id}`, this.state).then(res => {
      console.log('POSTING')
      console.log(this.props.journal);
    }).catch( (err) => console.log(err));
}

render(){
    return(
        // <EntryFormStyle >
        <EntryFormStyle onSubmit={this.handleSubmit}>
          <h4>My Daily Journal</h4>
          <br/>
          <br/>
          <input type="text" name ="content" value={this.state.content} 
            onChange={(e) => this.handleChange(e)} />
          {/*<label>Meter</label>
          <input type="radio" name ="meter" value={this.state.meter} 
            onChange={(e) => this.handleChange(e)} />*/}
          <button type="submit" value="submit">Add</button>
        </EntryFormStyle>
        // </EntryFormStyle>
        // </div>
        // </div>
    )
 }
}
export default EntryForm;