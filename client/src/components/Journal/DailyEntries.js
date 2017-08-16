import React, { Component } from "react";
import axios from 'axios';
import styled from 'styled-components'

const SingleEntry = styled.div `
background-color: green;
margin: 10px;
border-radius: 5px;
border: 5px solid pink;
padding: 10px;
color: white;
font-size: 15px;
`
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
                        <SingleEntry key={i}>
                        {entry.content}
                        {entry.time}
                        </SingleEntry>

                    )
                })}
            </div>
        )
    }
}

export default DailyEntries;