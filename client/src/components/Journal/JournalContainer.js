import React, { Component } from "react";
import axios from 'axios';
import DailyEntry from './DailyEntry';
import Meter from './Meter';
import MonthlyNotes from './MonthlyNotes';
import WeeklyGoal from './WeeklyGoal';

class JournalContainer extends Component{
  constructor(props){
        super(props)
  }
    state = {
        cArray: []
    };
    //fetching data with axios 
    componentWillMount(){
        axios.get('/api/journal').then((res) => {
            const cArray = res.data;
            console.log(res.data[0]);
            this.setState({
                cArray: cArray
            })
        })
    }
        render(){
            return(
                   <DailyEntry />
            )
    }
}
export default JournalContainer;