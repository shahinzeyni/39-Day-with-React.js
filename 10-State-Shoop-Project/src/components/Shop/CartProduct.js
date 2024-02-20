import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
export default class CartProduct extends Component {

  RemoveIdHandler(Id) {
    // console.log());
    this.props.onRemove(Id)
  }

  render() {
    let { id, title, price, img } = this.props;

    return (
      <div class="cart-row">
        <div class="cart-item cart-column">
          <img class="cart-item-image" src={img} width="100" height="100" />
          <span class="cart-item-title">{title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
          <button
            class="btn btn-danger"
            type="button"
            onClick={(Id) => this.RemoveIdHandler(id)}
          >
            REMOVE
          </button>
        </div>
      </div>
    );
  }
}
