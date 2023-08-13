---
title: "Memoization in JavaScript"
seoTitle: "Memoization in JavaScript"
datePublished: Sun Aug 13 2023 05:39:55 GMT+0000 (Coordinated Universal Time)
cuid: cll90o3zn000b09mnhqk7cigo
slug: memoization-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1691905169570/279fb745-7023-498b-8d02-b976ca5b629b.png
tags: javascript

---

Sure! Memoization is a technique used in programming to optimize the performance of functions by caching their results. It involves storing the results of expensive function calls and returning the cached result when the same inputs occur again. This can significantly reduce the number of computations and improve the overall speed of your code.

In JavaScript, you can implement memoization in various ways. Let's look at a simple example of memoizing a function that calculates the Fibonacci sequence:

```javascript
function fibonacci(n, memo = {}) {
  if (n <= 1) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}
```

In the `fibonacci` function above, we're using an object called `memo` to store the previously calculated Fibonacci numbers. The function takes an input `n`, representing the position in the Fibonacci sequence, and `memo` as an optional parameter (defaulting to an empty object).

The base case checks if `n` is less than or equal to 1 and returns `n` in those cases. This is necessary to break the recursion.

Next, we check if the result for the current `n` exists in the `memo` object. If it does, we simply return the cached result, avoiding redundant calculations.

If the result is not cached, we calculate it recursively by calling `fibonacci` for `n - 1` and `n - 2` while passing the `memo` object. We store the result in the `memo` object for future use and return it.

Now, let's see the memoized Fibonacci function in action:

```javascript
console.log(fibonacci(6));  // Output: 8
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(15)); // Output: 610
```

By using memoization, we avoid redundant calculations and improve the performance of the Fibonacci function, especially for larger values of `n`.

Keep in mind that memoization is most effective for functions with expensive computations or repetitive calculations. It's important to consider the trade-off between memory usage and the performance gain achieved through memoization.