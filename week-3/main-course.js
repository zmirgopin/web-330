    /**
================================
Title: main-course.js
Author: Zahava Gopin 
Date: 18 January 2023
Description: JavaScript for restaurant.html
================================
*/

/**
 * Add an import statement for the Product object.
 * Create a class named MainCourse and inherit the Product object.
 * In the classes constructor add two parameters and pass them to the parent class through the super() function.
 * Export the class
 */

"use strict";
import {Product} from "./product.js";

export class MainCourse extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}