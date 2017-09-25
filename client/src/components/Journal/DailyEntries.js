import React, { Component } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const SingleEntry = styled.div `
    background-color: #afbfff;
    margin: 10px;
    border-radius: 5px;
    border: 5px solid white;
    padding: 10px;
    color: black;
    font-size: 15px;
    font-weight: bold;
`
class DailyEntries extends Component{
  constructor(){
        super();
        this.state = {
            entries: [],
            user:[]
        }
  }

    // fetching data with axios 
    componentWillMount(){
        const res = axios.get('/api/journal').then((res) => {
            console.log(res.data[0]);
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
                        <br/>
                        <br/>
                        {entry.time}
                        <Link to={`/entry/${entry._id}`}><button>Edit</button></Link>
                        <button onClick={this.deleteThis}>Delete</button>
                        </SingleEntry>

                    )
                })}
            </div>
        )
    }
}

export default DailyEntries;