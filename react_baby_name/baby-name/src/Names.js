import React, { Component } from "react";
import { Link } from "react-router-dom";

class Names extends Component {


  render() {
    return (
      <div>
      <h1> Girls</h1>
      {this.props.names.map((el,i)=>{
        if(el.sex==='girl'){
        return (
        <div key={i}>
        <h2> {el.name}</h2>
       </div>
      )}}
        )}
      </div>
    );
  }
}
export default Names;