/**
================================
Title: calorie-converter.js
Author: Zahava Gopin 
Date: 25 January 2023
Description: JavaScript for calorie app
================================
*/
/**
 * Importing the FoodModel class to use with the new class called CalorieConverter.
 * The new class includes all of the data for the FoodModel objects.
 * Export the class. 
 */
"use strict";
import { FoodModel } from "./food-model.js";

export class CalorieConverter {

    static data = [
        new FoodModel(1007, 'Egg', 78),
        new FoodModel(1008, 'Apple', 95),
        new FoodModel(1009, 'Hamburger', 354),
        new FoodModel(1010, 'Fries', 400),
        new FoodModel(1011, 'Banana', 105),
        new FoodModel(1012, 'Soda', 150)
    ];


//Using the built in filter method to go through the data and assign it to a new array. 
    static find(str) {
        return this.data.filter(data => data.name.toLowerCase().includes(str.toLowerCase()))
    };
};

