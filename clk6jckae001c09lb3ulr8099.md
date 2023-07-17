---
title: "JavaScript Higher order functions"
seoTitle: "Higher order function in JavaScript"
datePublished: Mon Jul 17 2023 07:19:48 GMT+0000 (Coordinated Universal Time)
cuid: clk6jckae001c09lb3ulr8099
slug: javascript-higher-order-functions
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1689578319515/ecdbb040-10e1-4bb3-99b5-26db7378e72a.png
tags: javascript

---

Certainly! Here's a cheat sheet for JavaScript higher-order functions:

1. `map()`:
    
    * Transforms each element of an array and returns a new array of the same length.
        
    * Example:
        
        ```javascript
        const numbers = [1, 2, 3, 4];
        const doubledNumbers = numbers.map(function(num) {
          return num * 2;
        });
        // doubledNumbers: [2, 4, 6, 8]
        ```
        
2. `filter()`:
    
    * Creates a new array with only the elements that pass a certain condition.
        
    * Example:
        
        ```javascript
        const numbers = [1, 2, 3, 4];
        const evenNumbers = numbers.filter(function(num) {
          return num % 2 === 0;
        });
        // evenNumbers: [2, 4]
        ```
        
3. `reduce()`:
    
    * Applies a function to each element of an array, resulting in a single output value.
        
    * Example:
        
        ```javascript
        const numbers = [1, 2, 3, 4];
        const sum = numbers.reduce(function(acc, num) {
          return acc + num;
        }, 0);
        // sum: 10
        ```
        
4. `forEach()`:
    
    * Executes a function for each element in an array (does not return a new array).
        
    * Example:
        
        ```javascript
        const numbers = [1, 2, 3, 4];
        numbers.forEach(function(num) {
          console.log(num);
        });
        // Output: 1 2 3 4
        ```
        
5. `sort()`:
    
    * Sorts the elements of an array based on a provided comparison function.
        
    * Example:
        
        ```javascript
        const numbers = [4, 2, 3, 1];
        const sortedNumbers = numbers.sort(function(a, b) {
          return a - b;
        });
        // sortedNumbers: [1, 2, 3, 4]
        ```
        
6. `some()`:
    
    * Checks if at least one element in an array satisfies a given condition.
        
    * Example:
        
        ```javascript
        const numbers = [1, 2, 3, 4];
        const hasEvenNumber = numbers.some(function(num) {
          return num % 2 === 0;
        });
        // hasEvenNumber: true
        ```
        
7. `every()`:
    
    * Checks if all elements in an array satisfy a given condition.
        
    * Example:
        
        ```javascript
        const numbers = [1, 2, 3, 4];
        const allPositive = numbers.every(function(num) {
          return num > 0;
        });
        // allPositive: true
        ```
        

These higher-order functions can be used to simplify your code and perform common operations on arrays. Remember to adjust the provided functions according to your specific use case.