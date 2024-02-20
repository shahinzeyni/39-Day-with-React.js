import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export default class Social extends Component {
    render() {
        let {img,href} = this.props
        return (
            <li>
                <a href={href} target="_blank">
                    <img src={img} />
                </a>
            </li>
        )
    }
}
