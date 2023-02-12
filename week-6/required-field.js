/**
    ================================
    Title: required-field.js
    Author: Zahava Gopin 
    Date: 9 February 2023
    Description: JavaScript for gopin-future-value.html
    ================================
    */
"use strict";
/**
 * Class that says what the required fields are. 
 * Function to make sure that the fields were actually entered. 
 * Message if a field wasn't entered.
 */
export class RequiredField {
    constructor (name, field)
    {
        this.name = name;
        this.field = field;
    }

    validate(){
        return Boolean(this.field);
    };

    getMessage(){
        return (`${this.name} is a required field.`)
    };
};
