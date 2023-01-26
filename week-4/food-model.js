/**
================================
Title: food-model.js
Author: Zahava Gopin 
Date: 25 January 2023
Description: JavaScript for calorie app
================================
*/
/**
 * Exporting a class called FoodModel.
 * Constructors for the class include id, name, and calories. 
 */
"use strict";
export class FoodModel {
    constructor (id, name, calories)
    {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}