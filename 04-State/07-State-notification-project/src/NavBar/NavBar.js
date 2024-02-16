import React, { Component } from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default class NavBar extends Component {

    constructor() {
        super()

        this.state = {
            notifications: [
                "job1",
                "job2",
                "job3",
                "job4",
            ]
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-default  bg-primary bg-gradient  fixed-top navbar-dark" id="mainNav">

                <div className="container">

                    <a className="navbar-brand" href="/">Login / Sign Up</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            {this.state.notifications.length > 0 && (
                                <li className="nav-item">
                                    <span className="badge badge-pill badge-warning bg-warning ">{this.state.notifications.length}</span>
                                    <a className="nav-link" href="/News/">News <span className="sr-only">(current)</span></a>
                                </li>
                            )}

                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}
