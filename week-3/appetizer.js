    /**
================================
Title: appetizer.js
Author: Zahava Gopin 
Date: 18 January 2023
Description: JavaScript for restaurant.html
================================
*/

/**
 *  Add an import statement for the Product object.
 * Create a class named Appetizer and inherit the Product object.
 * In the constructor of the class add two parameters and pass them to the parent class through the super() function.
 * Export the class.
 */

"use strict";
import {Product} from "./product.js";

export class Appetizer extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}
