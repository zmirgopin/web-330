/**
    ================================
    Title: validator.js
    Author: Zahava Gopin 
    Date: 9 February 2023
    Description: JavaScript for gopin-future-value.html
    ================================
    */
"use strict";
/**
 * This class imports all of the classes that say "the rules" of the app. 
 * It uses the rules and combines them to make sure the whole app runs well. 
 */
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
    validators = [];
    messages = [];
    constructor(name, field) {
        this.name = name;
        this.field = field;

    };

    addRequiredField(){
        this.validators.push(new RequiredField(this.name, this.field))
    }

    addRequiredFloatField(){
        this.validators.push(new FloatField(this.name, this.field))
    }


    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min))
    };

    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max))
    };

    validate() {
        for (const validator of this.validators) {
           if(!validator.validate()) {
            this.messages.push(validator.getMessage())
            return false;
           }
        }

        return true 
    };

}

