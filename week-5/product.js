/**
================================
Title: product.js
Author: Zahava Gopin 
Date: 4 February 2023
Description: JavaScript for gopin-bobs-auto-repair.html
================================
*/

/**
 * Creating a Product class with two constructors and a third id property.
 * Export the class.
 */
"use strict";
export class Product {
    constructor(name, price)
        {this.name = name;
         this.price = price;
         this.id = Math.random().toString(16).slice(2);
        }

}