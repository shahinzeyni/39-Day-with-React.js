import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export default class Product extends Component {

    addToCartHandler(Id){
        console.log(Id);
        this.props.onAddCard(Id)
    }
    
    render() {
        let {id,title,img,price} = this.props
        return (
            <div class="shop-item">
                <span class="shop-item-title">{title}</span>
                <img class="shop-item-image" src={img} />
                <div class="shop-item-details">
                    <span class="shop-item-price">${price}</span>
                    <button
                        onClick={(Id) => this.addToCartHandler(id)}
                        class="btn btn-primary shop-item-button"
                        type="button"
                        >
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    }
}
