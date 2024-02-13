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


        setTimeout(() => {
            this.setState({
                users:[
                    {id:4 , name: "Japbar"},
                    {id:1 , name: "Mahdiye"},
                    {id:2 , name: "Shahin"},
                    {id:3 , name: "Elvin"},
                ]
            });
        },2000)
    }

    render() {
        return(
            <div>
                <h1>{this.code}</h1>
                <User {...this.state.users[0]}></User>
                <User {...this.state.users[1]}></User>
                <User {...this.state.users[2]}></User>
                <User {...this.state.users[3]}></User>
            </div>
        )
    }
} 
