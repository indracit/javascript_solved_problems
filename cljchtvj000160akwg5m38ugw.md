---
title: "Closures in JavaScript"
seoTitle: "closures in JavaScript"
datePublished: Mon Jun 26 2023 06:44:11 GMT+0000 (Coordinated Universal Time)
cuid: cljchtvj000160akwg5m38ugw
slug: closures-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1687761772515/375ce6e1-7abb-4fa3-a777-a855a1380522.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1687761820546/0b2b900b-5199-4f49-ba12-9bd439d33dd4.png
tags: javascript, reactjs, closures-in-javascript

---

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

1. Functions as first-class objects: In JavaScript, functions are treated as first-class objects, meaning they can be assigned to variables, passed as arguments to other functions, and returned as values from other functions.
    
2. Lexical scope: Lexical scope is the definition area of an expression. In other words, an item's lexical scope is the place in which the item got created.
    

In the below example , lexical scope of outerVariable is outerFunction scope.

Here's an example to illustrate closures in JavaScript:

```javascript
function outerFunction() {
  var outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closureExample = outerFunction();
closureExample(); // Output: "I am from the outer function"
```

In the above example, the `outerFunction` defines a variable `outerVariable` and declares an inner function `innerFunction`. The `innerFunction` references `outerVariable`, even though it is defined outside of its scope. When `outerFunction` is called and its returned value is assigned to `closureExample`, it effectively creates a closure. Later, when `closureExample` is invoked, it still has access to the `outerVariable` defined in the parent scope of `outerFunction`, and thus, it logs the value of `outerVariable` to the console.

Closures are useful in various scenarios, such as creating private variables and data encapsulation. They allow you to create functions with persistent state and encapsulated behavior. Additionally, closures are commonly used in asynchronous programming, event handling, and when working with higher-order functions like callbacks and functional programming paradigms.

It's important to note that closures can also have implications on memory usage, as they keep variables in memory even after their parent functions have completed execution. Therefore, it's crucial to be mindful of memory management when working with closures to avoid potential memory leaks.

In summary, closures in JavaScript provide a way to retain access to variables from the parent scope, allowing functions to access and manipulate those variables even after the parent function has finished executing.