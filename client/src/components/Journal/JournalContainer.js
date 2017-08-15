import React, { Component } from "react";
import axios from 'axios';
import EntryForm from './EntryForm';
import DailyEntries from './DailyEntry';
import Meter from './Meter';
import WeeklyGoal from './WeeklyGoal';

class JournalContainer extends Component{
  constructor(props){
        super(props)
  }
    state = {
        journalEntries: []
    };
    //fetching data with axios 
    componentWillMount(){
        axios.get('/api/journal').then((res) => {
            const entries = res.data;
            console.log(res.data[0]);
            this.setState({
                journalEntries: entries
            })
        })
    }
        render(){
          const journal = this.state.journal;
            return(
              <div>
                  {/*<EntryForm journal = {journal}/>*/}
                  <DailyEntries />
              </div>
            )
    }
}
export default JournalContainer;