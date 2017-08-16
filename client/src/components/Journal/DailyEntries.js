import React, { Component } from "react";
import axios from 'axios';
import Meter from './Meter';

class DailyEntries extends Component{
  constructor(){
        super();
        this.state = {
            entries: [],
        }
  }

    // fetching data with axios 
    componentWillMount(){
        axios.get('/api/journal').then((res) => {
            console.log(res.data);
            this.setState({
                entries: res.data[0].dailyEntry
            })
        })
    }

    render() {
        return(
            <div>
                {this.state.entries.map( (entry, i) => {
                    return(
                        <div key={i}>
                        {entry.content}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DailyEntries;