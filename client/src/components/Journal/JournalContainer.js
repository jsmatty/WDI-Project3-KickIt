import React, { Component } from "react";
import axios from 'axios';
import EntryForm from './EntryForm';
import DailyEntries from './DailyEntries';
import EntryShow from './EntryShow';
// import Meter from './Meter';
import WeeklyGoal from './WeeklyGoal';
import styled from 'styled-components';

const ContainerStyle = styled.div`
background-color: #f4eee1;

`

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
            // console.log(res.data);
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
            // console.log(this.state.journal[0])
            return(
                
              <ContainerStyle>
                  <div>
                  <EntryForm journal={this.state.journal}/>

                  <DailyEntries journal={this.state.journal}/>
                  </div>
              </ContainerStyle>
            )
    }
}

export default JournalContainer;