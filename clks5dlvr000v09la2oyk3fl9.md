---
title: "Generator function in JavaScript"
seoTitle: "Generator function in JavaScript"
datePublished: Tue Aug 01 2023 10:19:38 GMT+0000 (Coordinated Universal Time)
cuid: clks5dlvr000v09la2oyk3fl9
slug: generator-function-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690885092922/d2000b29-e4f9-4259-b288-cf9d94b6acb7.png
tags: javascript

---

In JavaScript, a generator is a special type of function that allows you to define an iterative algorithm by using the `function*` syntax. It is different from regular functions in that it can pause its execution and resume it later, allowing you to generate a sequence of values over time.

To define a generator function, you use the `function*` keyword followed by the function name and its parameters. Inside the generator function, you use the `yield` keyword to specify the value that will be returned when the generator is iterated.

Here's a simple example of a generator function that generates a sequence of numbers:

```javascript
function* numberGenerator() {
  let number = 1;
  while (true) {
    yield number;
    number++;
  }
}
```

In this example, the `numberGenerator` function is defined as a generator using the `function*` syntax. Inside the generator, we have an infinite loop that generates the next number in the sequence using the `yield` keyword. The value of `number` is returned as the current value of the generator, and the execution is paused until the generator is iterated again.

To use the generator, you need to create an instance of it and iterate over its values. You can do this by calling the generator function and assigning it to a variable. The variable will hold a generator object, which can be iterated using a `for...of` loop or by manually calling the `next()` method on the generator object.

```javascript
const generator = numberGenerator();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
// ...
```

In this example, we create an instance of the `numberGenerator` by calling the function and assigning it to the `generator` variable. We then use the `next()` method on the generator object to retrieve the next value in the sequence. The `value` property of the returned object contains the yielded value.

Generators are useful when you need to generate a sequence of values on-demand without having to compute or store all of them at once. They are commonly used in scenarios where you need to iterate over a large or infinite set of data, such as reading from a stream or generating Fibonacci series.

Note that generators also support sending values back into the generator function using the `yield` keyword. By calling the `next()` method with an argument, you can pass a value into the generator, which will be the result of the `yield` expression. This allows for two-way communication between the generator and the code using it.

That's a brief explanation of generators in JavaScript. They provide a powerful way to create iterable sequences of values with flexible control over the flow of execution.