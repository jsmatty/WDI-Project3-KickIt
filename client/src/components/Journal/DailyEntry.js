import React, { Component } from "react";
import axios from 'axios';
import Meter from './Meter';

class DailyEntry extends Component{
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
        const cArray = this.state.cArray.map((thing, i) => (
                <div key = {i}>
                <h2>{thing.dailyEntry}</h2>
                </div>
            ));
            return(
                    <p>{cArray}</p>
            )
    }
}
export default DailyEntry;