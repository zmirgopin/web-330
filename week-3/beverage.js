     /**
================================
Title: beverage.js
Author: Zahava Gopin 
Date: 18 January 2023
Description: JavaScript for restaurant.html
================================
*/

/**
 * Create a JavaScript class named Beverage.
 * Add an import statement for the product.js file and inherit the base classes properties.
 * In the class’s constructor add two parameters: name and price. 
 * Pass these parameters to the parent through the super() function.
 * Export the class
 */

"use strict";
import {Product} from "./product.js";

export class Beverage extends Product
{
    constructor (name, price)
    {
        super(name, price);
    }
}