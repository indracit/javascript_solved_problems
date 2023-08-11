---
title: "IIFE in JavaScript"
seoTitle: "IIFE in JavaScript"
datePublished: Fri Aug 11 2023 06:47:10 GMT+0000 (Coordinated Universal Time)
cuid: cll686vrb000k09l8hvqh5w8g
slug: iife-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1691736409747/510dc7f0-446f-443a-a2e6-edbbd3fe7b27.png
tags: javascript

---

IIFE stands for Immediately Invoked Function Expression. It is a JavaScript design pattern that allows you to create a function and execute it immediately after its definition. The main purpose of using an IIFE is to create a private scope for your code, encapsulating variables and functions, preventing them from polluting the global scope.

Here's an example of how an IIFE is structured:

```javascript
(function() {
  // code goes here
})();
```

Let's break down the example step by step:

1. The IIFE starts with an opening parenthesis `(function() {`.
    
2. Inside the parenthesis, you define an anonymous function. This function can have parameters if needed, like `(function(param) { ... })`, but in this case, there are no parameters.
    
3. After the function definition, you add a set of curly braces `{ ... }`. Inside the curly braces, you write your code that you want to be executed immediately.
    
4. Finally, the IIFE is immediately invoked by adding a pair of closing parentheses `})();` right after the function definition.
    

The purpose of this pattern is to create a local scope for your code. Any variables or functions defined within the IIFE are only accessible inside it and won't conflict with variables of the same name outside the IIFE. This helps prevent naming collisions and keeps your code modular and organized.

Here's an example demonstrating the private scope and preventing global pollution:

```javascript
(function() {
  var name = "John";

  function sayHello() {
    console.log("Hello, " + name + "!");
  }

  sayHello();
})();

console.log(name); // Throws an error because name is not defined globally
```

In this example, the variable `name` and the `sayHello` function are defined within the IIFE. They are accessible inside the IIFE but not outside of it. Attempting to access the `name` variable outside the IIFE will result in an error because it is not defined in the global scope.

IIFEs are commonly used in JavaScript to create modular code, avoid naming conflicts, and provide a clean and isolated environment for executing code.