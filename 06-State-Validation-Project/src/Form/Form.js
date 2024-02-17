import React from "react";
import "./Form.css";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,

            allValid: false
        }
    }

    sumbmitHandler(event){
        event.preventDefault()
        this.setState({
            submitted: true
        })
        console.log(event);
        
        if(this.state.firstNameData.length !== 0 && this.state.lastNameData.length !== 0 && this.state.emailData.length !== 0){
            this.setState({
                allValid: true
            })
        }

        setTimeout(() => {
            this.setState({
                allValid: false,
                submitted:false
            })
        },3000)
    }

    firstNameHandler(event){
        this.setState({
            firstNameData: event.nativeEvent.target.value
        })
    }

    lastNameHandler(event){
        this.setState({
            lastNameData: event.nativeEvent.target.value
        })
    }
    emailHandler(event){
        this.setState({
            emailData: event.nativeEvent.target.value
        })
    }
    render() {
        return (
          <div className="form-container">
            <form
              className="register-form"
              onSubmit={(event) => this.sumbmitHandler(event)}
              autoComplete="off"
            >
              {/* Uncomment the next line to show the success message */}
              {this.state.submitted && this.state.allValid && (
                <div className="success-message">
                  Success! Thank you for registering
                </div>
              )}



              <input
                id="first-name"
                className="form-field"
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={(event) => this.firstNameHandler(event)}
              />
              {/* Uncomment the next line to show the error message */}
              {this.state.submitted &&
                this.state.firstNameData.length === 0 && (
                  <span id="first-name-error">Please enter a first name</span>
                )}

              <input
                id="last-name"
                className="form-field"
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={(event) => this.lastNameHandler(event)}
              />
              {/* Uncomment the next line to show the error message */}
              {this.state.submitted && this.state.lastNameData.length === 0 && (
                <span id="last-name-error">Please enter a last name</span>
              )}

              <input
                id="email"
                className="form-field"
                type="text"
                placeholder="Email"
                name="email"
                onChange={(event) => this.emailHandler(event)}
              />
              {/* Uncomment the next line to show the error message */}
              {this.state.submitted && this.state.emailData.length === 0 && (
                <span id="email-error">Please Enter your Email!</span>
              )}

              <button className="form-field" type="submit">
                Register
              </button>
            </form>
          </div>
        );
    }
}
