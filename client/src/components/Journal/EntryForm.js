import React, { Component } from 'react';
import axios from 'axios';


class EntryForm extends Component {
  constructor(){
    super();
    this.state = {
      content : "",
      meter : ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
  // set variables for our elements, their name attributes, and their values
  const target = event.target;
  const name = target.name;
  const value = target.value;
  // create an object to hold current state of the updated keys and values
  const newState = {
    // computed property syntax from ES6:
    // this updates every state key and value using the 'name' attribute of our input elements
    //and the value of those individual elements
    [name]: value
  };
// Set the state with our newState object
    this.setState(newState);
// Testing handleChange function
  // console.log(Object.keys(newState));
  // console.dir(newState)
  // console.log('State - name: ' + this.state.name);
  // console.log('Future State - name: ' + newState.name);
  // console.log('State - desc: ' + this.state.description);
  // console.log('Future State - desc: ' + newState.description);
}
// This function will handle what happens when submit is fired.
// This where axios will hit the POST route of our API
handleSubmit(event){
    axios.post('http://localhost:3001/api/s', {
      content: this.state.content,
      meter: this.state.meter
    })
    // alert("helloos" + this.state.name);
    // alert(this.state.description)
}
render(){
    return(
        <form onSubmit = {this.handleSubmit}>
        <label>Title</label>
        <input type="text" name ="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
        <label>Description</label>
        <input type="text" name ="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />
        <label>About</label>
        <input type="submit" value="submit" />
        </form>
    )
 }
}
export default ChallengesForm;