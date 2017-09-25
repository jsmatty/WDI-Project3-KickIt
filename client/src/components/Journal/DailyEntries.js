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
            entries: []
        }
  }

    // fetching data with axios 
    componentWillMount(){
        // console.log(this.props.journal[0])
        const res = axios.get('/api/journal').then((res) => {
            console.log(res.data[0]);
            this.setState({
                entries: res.data[0].dailyEntry
            })
            // console.log(this.state.dailyEntries);
        })
    }

    deleteThis(){
        
        // axios.delete(`/api/entry/${entri}`)
       
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