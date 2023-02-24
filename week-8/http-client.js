/**
    ================================
    Title: http-client.js
    Author: Zahava Gopin 
    Date: 23 February 2023
    Description: JavaScript for gopin-whatabook2.html
    ================================
    */
"use strict";
/**
 * Class with two parameters. One is set to default, one is creating a new object.
 * creating a new URL search object.
 * object named res - fetch the API that passes through the url string, and make the request be a GET request.
 */
export class HttpClient{
    async get(url, params=""){
        let test = new URL(url);
        test.search = new URLSearchParams(params);

        const res = await fetch(test.toString(), {method: "GET"});
        return res.json();
    }
}