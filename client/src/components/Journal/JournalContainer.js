import React, { Component } from "react";
import axios from 'axios';
import EntryForm from './EntryForm';
import DailyEntries from './DailyEntries';
import EntryShow from './EntryShow';
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


    componentWillMount(){
        axios.get('/api/journal').then((res) => {
            const entries = res.data;
            this.setState({
                journal: res.data[0]
            })
        })
    }

     handleChange(event){
        console.log (event.target.value);
        const attributeName = event.target.name;
        const  attributeValue = event.target.value;
        const newState = {...this.state}
        newState[attributeName] = attributeValue;
        this.setState(newState);
}
        render(){
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