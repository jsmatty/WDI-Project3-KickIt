import React, { Component } from "react";
import axios from 'axios';
import Meter from './Meter';

class DailyEntries extends Component{
  constructor(){
        super()
  };
    state = {
        entries: []
    };
    //fetching data with axios 
    componentWillMount(){
        axios.get('/api/journal').then((res) => {
            const entries = res.data;
            console.log(res.data[0]);
            this.setState({
                entries: entries
            })
        })
    }
        render(){
        const entries = this.state.entries.map((thing, i) => (
                <div key = {i}>
                <h2>{thing.dailyEntry}</h2>
                </div>
            ));
            return(
                    <p>{entries}</p>
            )
    }
}
export default DailyEntries;