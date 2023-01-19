     /**
================================
Title: beverage.js
Author: Zahava Gopin 
Date: 18 January 2023
Description: JavaScript for restaurant.html
================================
*/

import {Product} from "./product.js";

export class Beverage extends Product
{
    constructor (name, price)
    {
        super(name, price);
    }
}