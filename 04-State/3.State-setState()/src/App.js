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
                    ],
                    scores : [1,20,5,6,56],
                    count: 0
                }
            }

            clickHandler(){
                // this.setState({
                //     users : [
                //         {id:4 , name: "Mosa"},
                //         {id:2 , name: "Shahin"},
                //         {id:1 , name: "Mahdiye"},
                //         {id:3 , name: "Elvin"},
                //     ]
                // })

                this.setState((preState) => {
                    return {count: preState.count + 1}
                })
            }

            render(){
                return(
                    <div>
                        <button onClick={this.clickHandler.bind(this)} >Click To Change!</button>
                        <User {...this.state.users[0]}></User>
                        <User {...this.state.users[1]}></User>
                        <User {...this.state.users[2]}></User>
                        <User {...this.state.users[3]}></User>
                    </div>
                )
            }

}