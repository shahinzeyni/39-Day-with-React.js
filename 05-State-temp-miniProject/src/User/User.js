import React, { Component } from "react";
import "./User";

export default class User extends Component {

  constructor(props){
    super(props)
    this.state = {
      temp: 14,
      tempClass: "cold"
    }
  }

  addFunc(){
    if(this.state.temp > 30){
      return false
    }

    this.setState((pre) => {
      return {temp: pre.temp + 1}
    })

    if(this.state.temp >= 15){
      this.setState({tempClass: "hot"})
    }
  }

  minfunc(){
    if(this.state.temp < 0){
      return false
    }

    this.setState((pre) => {
      return {temp: pre.temp - 1}
    })

    if(this.state.temp < 15){
      this.setState({tempClass: "cold"})
    }
  }
  render() {
    return (

        <div className="box">
          <div className={`fisrt_sec ${this.state.tempClass}`} >
            <p className="counter_number">{this.state.temp}°C</p>
          </div>
          <div className="second_sec">
            <button className="addBtn " onClick={this.addFunc.bind(this)}>Add Count</button>
            <button className="lowerBtn" onClick={this.minfunc.bind(this)} >Lower Count</button>
          </div>
        </div>
    );
  }
}
