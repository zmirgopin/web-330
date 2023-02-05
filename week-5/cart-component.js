/**
================================
Title: cart-component.js
Author: Zahava Gopin 
Date: 4 February 2023
Description: JavaScript for gopin-bobs-auto-repair.html
================================
*/
/**exporting a class called CartComponent that extends an HTML element. 
 * creating a connected call back. 
 * 
 */
"use strict";
export class CartComponent extends HTMLElement {
    constructor (){
        super();
    }

    connectedCallback() {
        this.innerHTML = `<i id="cartIcon" class= "fa fa-shopping-cart"></i>(<span id="cart-count"></span>)`;
    }

}

customElements.define("cart-component", CartComponent);