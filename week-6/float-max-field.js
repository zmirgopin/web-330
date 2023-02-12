/**
    ================================
    Title: float-max-field.js
    Author: Zahava Gopin 
    Date: 9 February 2023
    Description: JavaScript for gopin-future-value.html
    ================================
    */
"use strict";
/**
 * Class that says what the max is for each field. 
 * Message to display that says what the error is if go above the maximum. 
 */
export class FloatMaxField{
    constructor(name, field, max)
    {
        this.name = name;
        this.field = field;
        this.max = max;
    };

    validate(){
        return parseFloat(this.field)<this.max
    };

    getMessage(){
        return (`${this.name} must be less than ${this.max}. You entered ${this.field}.`)
    }
}