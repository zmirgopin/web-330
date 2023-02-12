/**
    ================================
    Title: float-min-field.js
    Author: Zahava Gopin 
    Date: 9 February 2023
    Description: JavaScript for gopin-future-value.html
    ================================
    */
"use strict";
/**
 * Class that says what the minimum is for each field. 
 * Message to display that says what the error is if go below the minimum. 
 */
export class FloatMinField{
    constructor(name, field, min)
    {
        this.name = name;
        this.field = field;
        this.min = min;
    };

    validate(){
      return parseFloat(this.field)>this.min
    };

    getMessage(){
        return (`${this.name} must be more than ${this.min}. You entered ${this.field}.`);
    }
    
}