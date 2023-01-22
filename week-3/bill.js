    /**
================================
Title: bill.js
Author: Zahava Gopin 
Date: 18 January 2023
Description: JavaScript for restaurant.html
================================
*/

/**
 * Create a class named Bill.
 * Create four class properties: _beverages, _appetizers, _mainCourses, and _desserts and assign them an empty array.
 */

"use strict";
export class Bill{
    constructor(_beverages, _appetizers, _mainCourses, _desserts)
    {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = []; 
    }
    
 addBeverage(beverage)  //A function named addBeverage() with one parameter of type beverage
{
    this._beverages.push(beverage); //Push the beverage object to the _beverages array.
}

 addAppetizer(appetizer)  //A function named addAppetizer() with one parameter of type appetizer
{
    this._appetizers.push(appetizer); //Push the appetizer object to the _appetizers array. 
}

 addMainCourse(mainCourse)  //A function named addMainCourse() with one parameter of type mainCourse.
{
    this._mainCourses.push(mainCourse);  //Push the mainCourse object to the _mainCourses array. 
}

 addDessert(dessert)  //A function named addDessert() with one parameter of type dessert. 
{
    this._desserts.push(dessert);  //Push the dessert object to the _desserts array.
}

 getTotal()  //A function named getTotal(). 
{
    let total = 0;
/**
 * Loop over each array and calculate the total using the price field of each object.
 * Return the total variable and set its precisions to two decimal places. 
 * Export the class.
 */



    let beverageTotal = this._beverages.forEach(function(beverage)
    {
        total += parseFloat(beverage.price);
    })


    let appetizerTotal = this._appetizers.forEach(function(appetizer)
    {
        total += parseFloat(appetizer.price);
    })


    let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
    {
        total += parseFloat(mainCourse.price);
    })


    let dessertTotal = this._desserts.forEach(function(dessert)
    {
        total += parseFloat(dessert.price);
    })

    return total.toFixed(2);
}
}

