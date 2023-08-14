---
title: "Throttle in JavaScript"
seoTitle: "Throttle in JavaScript"
datePublished: Mon Aug 14 2023 11:20:45 GMT+0000 (Coordinated Universal Time)
cuid: cllasaa13000w08mjddmj2b6n
slug: throttle-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1692012028757/d2215f8d-a22d-4ad8-b7cf-72ec9a508fa7.png
tags: javascript

---

In JavaScript, throttling is a technique used to control the rate at which a function gets executed. It ensures that the function is called at a maximum frequency or delay, regardless of how frequently the function is invoked.

Throttling is commonly used in scenarios where you want to limit the number of times a function is called within a specific timeframe, especially in situations where the function may be triggered rapidly, such as in response to user input or scroll events. By throttling the function, you can prevent excessive calls and improve performance.

The basic idea behind throttling is to wrap the function inside another function that regulates its execution. Here's a simplified implementation of a throttling function:

```javascript
function throttle(func, delay) {
  let timeoutId;
  let lastExecutedTimestamp = 0;

  return function(...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecutedTimestamp < delay) {
      // The specified delay has not passed, ignore the function call
      return;
    }

    // Update the last executed timestamp
    lastExecutedTimestamp = currentTime;

    // Clear the previous timeout (if any)
    clearTimeout(timeoutId);

    // Set a new timeout to execute the function after the delay
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
```

In this implementation, the `throttle` function takes two parameters: `func`, which represents the function to be throttled, and `delay`, which specifies the time interval (in milliseconds) between function invocations.

Inside the throttling function, a closure is created, which retains the `timeoutId` and `lastExecutedTimestamp` variables across multiple function calls. The `lastExecutedTimestamp` is used to track the time when the function was last executed.

When the throttled function is invoked, it checks if the time elapsed since the last execution is less than the specified delay. If it is, the function call is ignored, and nothing happens. Otherwise, the `lastExecutedTimestamp` is updated to the current time, and any previous timeout is cleared.

Finally, a new timeout is set using `setTimeout`, which will invoke the original function `func` after the specified delay. The `apply` method is used to pass the arguments to the original function.

By using the `throttle` function, you can wrap any other function and ensure that it is executed at a controlled rate. For example:

```javascript
function myFunction() {
  console.log('Throttled function executed');
}

const throttledFunction = throttle(myFunction, 1000); // Throttle to a 1-second delay

// Invoke the throttled function multiple times in quick succession
throttledFunction(); // This call will execute the function immediately
throttledFunction(); // This call will be throttled and delayed by 1 second
throttledFunction(); // This call will be ignored due to throttling
```

In this example, the `myFunction` is wrapped with the `throttle` function, creating `throttledFunction` that will execute `myFunction` with a 1-second delay between invocations. The first call is executed immediately, but subsequent calls within the 1-second interval will be delayed or ignored according to the throttling logic.

Throttling can be useful to optimize performance and manage resources, especially in scenarios where rapid or frequent function calls need to be controlled.