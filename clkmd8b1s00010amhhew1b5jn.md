---
title: "bind (), call (), apply() in JavaScript"
seoTitle: "bind (), call (), apply() in JavaScript"
datePublished: Fri Jul 28 2023 09:12:51 GMT+0000 (Coordinated Universal Time)
cuid: clkmd8b1s00010amhhew1b5jn
slug: bind-call-apply-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690535546967/7b797b8f-1ecd-4a04-8133-d3143e2c5e53.png
tags: javascript

---

In JavaScript, the `bind`, `call`, and `apply` methods are used to manipulate the execution context of a function, allowing you to control the value of the `this` keyword and pass arguments to the function. While they serve similar purposes, there are some differences in how they are used. Let's discuss each method in detail:

1. `bind`: The `bind` method creates a new function with a specified `this` value and, optionally, pre-defined arguments. It doesn't immediately execute the function but returns a new function that you can invoke later. The `bind` method takes the following syntax:
    
    ```javascript
    function.bind(thisArg[, arg1[, arg2[, ...]]])
    ```
    
    * `thisArg`: The value to be used as `this` inside the function when it is called.
        
    * `arg1, arg2, ...`: Optional arguments to be pre-filled when the function is invoked.
        
    
    Example:
    
    ```javascript
    function greet(name) {
      console.log(`Hello, ${name}! I'm ${this.name}.`);
    }
    
    const person = {
      name: 'John',
    };
    
    const greetPerson = greet.bind(person, 'Alice');
    greetPerson(); // Output: Hello, Alice! I'm John.
    ```
    
    In the above example, `bind` is used to create a new function `greetPerson` with `this` value set to `person` and `name` argument pre-filled as `'Alice'`. When `greetPerson` is called, it logs the greeting using the predefined `this` and `name` values.
    
2. `call`: The `call` method calls a function with a specified `this` value and individual arguments provided separately. It immediately executes the function. The `call` method takes the following syntax:
    
    ```javascript
    function.call(thisArg[, arg1[, arg2[, ...]]])
    ```
    
    * `thisArg`: The value to be used as `this` inside the function when it is called.
        
    * `arg1, arg2, ...`: Optional arguments to be passed to the function.
        
    
    Example:
    
    ```javascript
    function greet(name) {
      console.log(`Hello, ${name}! I'm ${this.name}.`);
    }
    
    const person = {
      name: 'John',
    };
    
    greet.call(person, 'Alice'); // Output: Hello, Alice! I'm John.
    ```
    
    In the above example, `call` is used to invoke the `greet` function with `this` value set to `person` and the `name` argument passed as `'Alice'`. The function is immediately executed, and the greeting is logged.
    
3. `apply`: The `apply` method is similar to `call`, but it accepts arguments as an array or an array-like object, instead of individual arguments. It also immediately executes the function. The `apply` method takes the following syntax:
    
    ```javascript
    function.apply(thisArg, [argsArray])
    ```
    
    * `thisArg`: The value to be used as `this` inside the function when it is called.
        
    * `argsArray`: An array or an array-like object containing arguments to be passed to the function.
        
    
    Example:
    
    ```javascript
    function greet(name) {
      console.log(`Hello, ${name}! I'm ${this.name}.`);
    }
    
    const person = {
      name: 'John',
    };
    
    greet.apply(person, ['Alice']); // Output: Hello, Alice! I'm John.
    ```
    
    In the above example, `apply` is used to invoke the `greet` function with `this`
    

value set to `person`, and the `name` argument passed as `['Alice']`. The function is immediately executed, and the greeting is logged.

Both `call` and `apply` allow you to explicitly specify the `this` value and provide arguments, but they differ in how arguments are passed (individual or array-like). `bind` creates a new function with the desired `this` value and pre-filled arguments, without immediately executing it.

These methods are useful when you want to control the context of a function invocation or reuse functions with specific context and arguments.