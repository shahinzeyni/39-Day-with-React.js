import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export default class Book extends Component {
    render() {
        return (
            <tr>
                <th>{this.props.title}</th>
                <th>{this.props.author}</th>
                <th>{this.props.year}</th>
            </tr>
        )
    }
}
