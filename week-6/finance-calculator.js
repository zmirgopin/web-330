/**
    ================================
    Title: finance-calculator.js
    Author: Zahava Gopin 
    Date: 9 February 2023
    Description: JavaScript for gopin-future-value.html
    ================================
    */
"use strict";
/**
 * Create a class to calculate the value. 
 * Make sure the currency is right. 
 */
export class FinanceCalculator{
    static MONTHS_IN_THE_YEAR = 12;

    static calculateFutureValue(monthlyPayment, rate, years)
    {
        let month = years* FinanceCalculator.MONTHS_IN_THE_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * month;
        let futureValue = presentValue * (Math.pow(interestRate, month));

        return futureValue.toFixed(2);
    };

    static convertToCurrency(field)
    {
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });
        
        return currencyFormatter.format(field);
    }
}