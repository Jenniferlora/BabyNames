import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Names from './Names.js';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      names:[]
     
    }
  }

  getAllNames(){
     axios({url: "http://localhost:3000/names"})
    .then(response => {
      console.log('data:', response.data);
      this.setState({
        names: response.data
      })
    });
  }

  componentDidMount(){
    this.getAllNames()
  }

  render() {
    return (
        <div className="App">
           
                  
                  <Names
                   
                    names={this.state.names}
                  />
                  </div>
                  )}
              
    
  }


export default App;


