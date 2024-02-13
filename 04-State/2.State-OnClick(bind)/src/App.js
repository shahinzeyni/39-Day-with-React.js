import React,{Component} from 'react'
import "./App.css";
import User from "./User/User";
import "./User/User.css";

export default class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: [
                {id:1 , name: "Mahdiye"},
                {id:2 , name: "Shahin"},
                {id:3 , name: "Elvin"},
                {id:4 , name: "Mosa"}
            ]
        }

        this.code = 20
        // this.clickHandler = this.clickHandler.bind(this) ---Third
    }

    clickHandler () {
        alert("Clicked :)")
        this.code = 12
        console.log(this);
    }

    inputHandler(){
        console.log("Typed");
    }

    render() {
        return(
            <div>
                {/* <button onClick={this.clickHandler.bind(this)} >{this.code}</button> -->first */}
                {/* <button onClick={() => this.clickHandler() } ></button> ---> Second */}
                {/* <button onClick={this.clickHandler} >{this.code}</button> ---->Third */}

                <input type="text" onKeyDown={this.inputHandler} />
                <User {...this.state.users[0]}></User>
                <User {...this.state.users[1]}></User>
                <User {...this.state.users[2]}></User>
                <User {...this.state.users[3]}></User>
            </div>
        )
    }
} 
