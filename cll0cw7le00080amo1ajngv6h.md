---
title: "Decorator in JavaScript"
seoTitle: "Decorator in JavaScript"
datePublished: Mon Aug 07 2023 04:12:13 GMT+0000 (Coordinated Universal Time)
cuid: cll0cw7le00080amo1ajngv6h
slug: decorator-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1691381510485/583254f7-3a26-4955-b5d5-dac697f3d163.png
tags: javascript

---

In JavaScript, a decorator is a design pattern that allows you to modify the behavior of an object or function dynamically by wrapping it with another object or function. Decorators provide a way to add or change functionality without modifying the original object or function directly.

A decorator can be implemented as a function or a class that takes the target object or function as an input and returns a new object or function with additional or modified behavior. It works by creating a wrapper around the original object or function and intercepting calls to it.

Let's see an example of how to implement a decorator in JavaScript:

```javascript
// Decorator function
function logDecorator(target) {
  // Create a wrapper function
  function wrapper(...args) {
    console.log('Calling function:', target.name);
    return target(...args);
  }

  return wrapper;
}

// Original function
function greet(name) {
  console.log('Hello,', name);
}

// Decorate the function
const decoratedGreet = logDecorator(greet);

// Call the decorated function
decoratedGreet('John');
```

In the example above, we have a decorator function called `logDecorator` that takes a target function as an argument. It creates a wrapper function `wrapper` that adds logging functionality before and after calling the target function. The wrapper function logs the name of the target function and then calls it with the provided arguments.

We then have an original function `greet` that simply logs a greeting message. We use the `logDecorator` to decorate the `greet` function and create a new function `decoratedGreet`. When we call `decoratedGreet('John')`, it will log the function name and the greeting message.

Decorators can be used in various scenarios, such as:

1. Adding additional functionality to a function or object, such as logging, caching, or authentication.
    
2. Modifying the behavior of a function, such as adding validation or error handling.
    
3. Implementing aspect-oriented programming (AOP) techniques, where cross-cutting concerns can be applied to multiple functions or objects in a modular way.
    

Please note that in JavaScript, decorators are not yet part of the official ECMAScript (JavaScript) specification. However, they are a proposed feature and can be used with the help of transpilers like Babel or TypeScript.