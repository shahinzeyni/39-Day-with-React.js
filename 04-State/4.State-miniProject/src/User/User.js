import React, { Component } from "react";
import "./User";

export default class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  addFunc(){
    this.setState((pre) => {
      return {counter : pre.counter + 1}
    })
  }
  minfunc(){
    this.setState((pre) => {
      return {counter: pre.counter - 1}
    })
  }
  render() {
    return (

        <div className="box">
          <div className="fisrt_sec">
            <h1 className="title">Counter</h1>
            <p className="counter_number">0</p>
          </div>
          <div className="second_sec">
            <button className="addBtn " onClick={this.addFunc.bind(this)}>Add Count</button>
            <button className="lowerBtn" onClick={this.minfunc.bind(this)} >Lower Count</button>
          </div>
        </div>
    );
  }
}
