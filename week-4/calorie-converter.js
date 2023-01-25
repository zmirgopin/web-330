"use strict"; 
import {FoodModel} from "./food-model.js";

export class CalorieConverter
{
    static find()
    {
    
    }
    static data = {id: 1007, name: "Egg", calories: 78}

}
let egg = new FoodModel(1007, "Egg" , 78);
let apple = new FoodModel(1008, "Apple", 95);
let hamburger = new FoodModel(1009, "Hamburger", 354);
let fries = new FoodModel(1010, "Fries", 400);
let banana = new FoodModel(1011, "Banana", 105);
let soda = new FoodModel(1012, "Soda", 150);


