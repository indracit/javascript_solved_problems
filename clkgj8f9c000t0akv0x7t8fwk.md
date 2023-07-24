---
title: "Pipe and Compose in JavaScript"
seoTitle: "Pipe and Compose in JavaScript"
datePublished: Mon Jul 24 2023 07:14:17 GMT+0000 (Coordinated Universal Time)
cuid: clkgj8f9c000t0akv0x7t8fwk
slug: pipe-and-compose-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690182823023/d6fbdda4-15b6-400d-b3ff-a113ef8deb0f.png
tags: javascript

---

In JavaScript, the concepts of the `pipe` and `compose` functions are commonly used in functional programming to combine multiple functions into a single function. These functions provide a way to perform function composition, where the output of one function becomes the input to the next function in a chain.

Let's start by discussing the `pipe` function. The `pipe` function takes multiple functions as arguments and returns a new function that applies each function in sequence, passing the result of each function call as the input to the next function.

Here's an example implementation of the `pipe` function:

```javascript
function pipe(...functions) {
  return function (input) {
    return functions.reduce((result, func) => func(result), input);
  };
}
```

In this implementation, the `pipe` function accepts any number of functions using the rest parameter syntax (`...functions`). It returns a new function that takes an input value. The `reduce` method is then used to apply each function in the `functions` array, passing the result of each function call as the input to the next function.

Here's an example usage of the `pipe` function:

```javascript
function add(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}

function double(x) {
  return x * 2;
}

const addSquareAndDouble = pipe(add, square, double);

console.log(addSquareAndDouble(3, 4)); // Output: 98
```

In this example, we define three functions: `add`, `square`, and `double`. We then create a new function `addSquareAndDouble` using the `pipe` function, passing the `add`, `square`, and `double` functions as arguments. When we call `addSquareAndDouble(3, 4)`, it applies the functions in sequence: `add(3, 4)` returns `7`, `square(7)` returns `49`, and `double(49)` returns `98`.

Now let's move on to the `compose` function. The `compose` function is similar to `pipe`, but it applies the functions in the reverse order. The output of the last function becomes the input of the second-to-last function, and so on, until the first function is called.

Here's an example implementation of the `compose` function:

```javascript
function compose(...functions) {
  return function (input) {
    return functions.reduceRight((result, func) => func(result), input);
  };
}
```

The implementation is similar to `pipe`, but we use the `reduceRight` method instead of `reduce` to apply the functions in reverse order.

Here's an example usage of the `compose` function:

```javascript
function subtract(a, b) {
  return a - b;
}

function divideByThree(x) {
  return x / 3;
}

function negate(x) {
  return -x;
}

const subtractDivideAndNegate = compose(subtract, divideByThree, negate);

console.log(subtractDivideAndNegate(12, 6)); // Output: -2
```

In this example, we define three functions: `subtract`, `divideByThree`, and `negate`. We create a new function `subtractDivideAndNegate` using the `compose` function, passing the functions in the desired order. When we call `subtractDivideAndNegate(12, 6)`, it applies the functions in reverse order: `negate(12)` returns `-12`, `divideByThree(-12)` returns `-4`, and `subtract(12, -4)` returns `-2`.

Both `pipe` and `compose`

functions are powerful tools for function composition in JavaScript. They allow you to create reusable and modular code by combining smaller functions into more complex operations. Depending on the use case and the desired order of function application, you can choose between `pipe` and `compose` to achieve the desired result.