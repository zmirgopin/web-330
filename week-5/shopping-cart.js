/**
================================
Title: shopping-cart.js
Author: Zahava Gopin 
Date: 4 February 2023
Description: JavaScript for gopin-bobs-auto-repair.html
================================
*/
/**
 * Creating a class called ShoppingCart, assign its property "products" to an empty array. 
 * Creating two functions, one to return the length of the product, one to push the product, and one to iterate over the products. 
 */
"use strict";
export class ShoppingCart {
    constructor()
    {
        this.products = [];
    };

    count()
    {
        return this.products.length
    };

    add(product)
    {
        this.products.push(product);

    };

    *[Symbol.iterator](){
        for (const oneProduct of this.products) {
            yield oneProduct;
        };
    }

    
};