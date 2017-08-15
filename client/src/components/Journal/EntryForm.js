import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';


class EntryForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      content : " ",
      meter : " "
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
    [name]: value
  };
// Set the state with our newState object
    this.setState(newState);
}
handleSubmit(event){
    axios.post('/api/entry', this.state).then(res => {
      console.log('POSTING')
      console.log(this.props.journal);
      <Redirect to="/journal" />
      
    })
}
render(){
    return(
        <form onSubmit = {this.handleSubmit}>
        <label>Content</label>
        <input type="text" name ="content" value={this.state.content} onChange={(e) => this.handleChange(e)} />
        <label>Meter</label>
        <input type="text" name ="meter" value={this.state.meter} onChange={(e) => this.handleChange(e)} />
        <Link to='./journal'><button type="submit" value="submit">Submit</button></Link>
        </form>
    )
 }
}
export default EntryForm;