import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default class Header extends Component {
    render() {
        return (
            <h1 className="display-4 text-center">
                <i className="fas fa-book-open text-warning">
                </i>ShM 
                <span className="text-warning">Book</span>List
            </h1>
        )
    }
}
