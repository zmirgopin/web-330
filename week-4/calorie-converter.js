"use strict"; 
import {FoodModel} from "./food-model.js";

export class CalorieConverter extends FoodModel
{
 
    static data = [
        {id: 1007, name: "Egg", calories: 78}, {id: 1008, name: "Apple", calories: 95}, {id: 1009, name: "Hamburger", calories: 354}, {id: 1010, name: "Fries", calories: 400}, {id: 1011, name: "Banana", calories: 105}, {id: 1012, name: "Soda", calories: 150}
    ];

    static find (str)
    { 
        data.filter(function(data)
        {
        return data  === str
        });
    };
};

