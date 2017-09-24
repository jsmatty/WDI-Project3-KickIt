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
      //meter : ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

     componentWillMount(){
      //  console.log(this.props);

      //  const entry_id = this.props.match.params.id
      //   axios.get(`/api/entry/${entry_id}`).then((res) => {
      //       console.log(res);
      //       this.setState({
      //           content: ''
      //       })
      //   })
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
        // <EntryFormStyle >
        // <EntryFormStyle onSubmit={this.handleSubmit}>
         <form onSubmit={this.handleSubmit}>
          <h4>Edit Journal Entry</h4>
          <br/>
          <br/>
          <input type="text" name ="content" value={this.state.content}
            onChange={(e) => this.handleChange(e)} />
          {/*<label>Meter</label>
          <input type="radio" name ="meter" value={this.state.meter} 
            onChange={(e) => this.handleChange(e)} />*/}
            <input type="submit" value='BLAHHH'/>
          {/*<input type="submit" value="submit">Add</input>*/}
          </form>
        // </EntryFormStyle>
        // </EntryFormStyle>
        // </div>
        // </div>
    )
 }
}
export default EntryShow;