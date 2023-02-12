/**
    ================================
    Title: float-field.js
    Author: Zahava Gopin 
    Date: 9 February 2023
    Description: JavaScript for gopin-future-value.html
    ================================
    */
"use strict";
/**
 * Class that makes sure the fields entered are valid. 
 * A message to return the error. 
 */
export class FloatField{
    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    };

    validate(){
        return !isNaN(parseFloat(this.field))
    };

    getMessage(){
        return (`${this.name} must be a float value. You entered ${this.field}.`)
    };
}