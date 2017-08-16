import React, { Component } from "react";
import axios from 'axios';
import EntryForm from './EntryForm';
import DailyEntries from './DailyEntries';
import Meter from './Meter';
import WeeklyGoal from './WeeklyGoal';

class JournalContainer extends Component{
  constructor(props){
        super(props);
        this.state = {
            journal: {}
        }
  }


    //fetching data with axios 
    componentWillMount(){
        axios.get('/api/journal').then((res) => {
            const entries = res.data;
            console.log(res.data[0]);
            this.setState({
                journal: res.data[0]
            })
        })
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
        render(){
            return(
              <div>
                  <EntryForm journal={this.state.journal}/>
                  <DailyEntries />
              </div>
            )
    }
}

export default JournalContainer;