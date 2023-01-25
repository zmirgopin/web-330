"use strict"; 
import {FoodModel} from "./food-model.js";

export class CalorieConverter extends FoodModel
{
 
    static data = [
        new FoodModel(1007, 'Egg', 78), 
        new FoodModel(1008, 'Apple', 95), 
        new FoodModel(1009, 'Hamburger', 354), 
        new FoodModel(1010, 'Fries', 400), 
        new FoodModel(1011, 'Banana', 105), 
        new FoodModel(1012, 'Soda', 150)
    ];



    static find (str)
    { 
        data.filter(function(data)
        {
        return data.name  === str
        });
    };
};

