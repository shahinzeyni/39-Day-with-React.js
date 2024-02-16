import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userText: "",
      textareaValue: "",
      isLogin: false
    }
  }

  textChange(event){
    this.setState({
      userText: event.nativeEvent.target.value
    })
    console.log(event);
  }

  textAreaChange(event){
    // console.log(event);
    this.setState({
      textareaValue: event.nativeEvent.target.value
    })
  }

  checkBtnChange(event){
    // console.log(event);
    this.setState({
      isLogin:event.nativeEvent.target.checked
    })
  }

  render() {
    return (
      <div>
          {/* <h3>{this.state.userText}</h3> */}
          {/* <input type="text"  value={this.state.userText}  onChange={(event) => this.textChange(event)} /> */}
          
          {/* <h1>{this.state.textareaValue}</h1> */}
          {/* <textarea  value={this.state.textareaValue} cols="30" rows="10" onChange={(event) => this.textAreaChange(event)}></textarea> */}

          <input type="checkbox" checked={this.state.isLogin} onChange={(event) => this.checkBtnChange(event)} />
      </div>
    )
  }
}
