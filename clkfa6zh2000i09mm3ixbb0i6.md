---
title: "Promises in JavaScript"
seoTitle: "Promises in JavaScript"
datePublished: Sun Jul 23 2023 10:13:27 GMT+0000 (Coordinated Universal Time)
cuid: clkfa6zh2000i09mm3ixbb0i6
slug: promises-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690107165546/23a9c71b-9502-48a1-8a3c-ef03d4aa870e.png
tags: javascript

---

In JavaScript, promises are a powerful mechanism for handling asynchronous operations. They provide a way to work with asynchronous code in a more structured and readable manner. Promises represent the eventual completion or failure of an asynchronous operation and allow you to chain multiple asynchronous operations together.

A promise is an object that can be in one of three states: pending, fulfilled, or rejected. When a promise is created, it is initially in the pending state. Once the asynchronous operation is completed, the promise is either fulfilled or rejected, depending on the outcome of the operation.

Here's an overview of the three states of a promise:

1. Pending: The initial state of a promise. It represents that the asynchronous operation is still in progress, and the promise is neither fulfilled nor rejected.
    
2. Fulfilled: The state of a promise when the asynchronous operation is successfully completed. It means that the promise has a resulting value, often referred to as the fulfillment value. Once fulfilled, the promise cannot transition to any other state, and the fulfillment value is immutable.
    
3. Rejected: The state of a promise when the asynchronous operation encounters an error or failure. It means that the promise has a reason for rejection, often referred to as the rejection reason. Like fulfillment, once a promise is rejected, it cannot transition to any other state, and the rejection reason is immutable.
    

Promises are typically created using the `Promise` constructor. The constructor takes a single argument, a function called the executor function. The executor function is passed two arguments: `resolve` and `reject`. Inside the executor function, you perform your asynchronous operation, and when it's complete, you call `resolve` to fulfill the promise or `reject` to reject the promise.

Here's an example of creating and using a promise:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation
  // If successful, call resolve(value)
  // If an error occurs, call reject(error)
});

myPromise
  .then((value) => {
    // Handle the fulfillment
  })
  .catch((error) => {
    // Handle the rejection
  });
```

In the example above, you create a new promise called `myPromise`. Inside the executor function, you would perform your asynchronous operation and call `resolve(value)` when it succeeds or `reject(error)` when it fails. After creating the promise, you can chain `.then()` and `.catch()` methods to handle the fulfillment and rejection respectively.

The `.then()` method takes a callback function that is invoked when the promise is fulfilled. The callback function receives the fulfillment value as an argument. You can chain multiple `.then()` methods together to create a sequence of asynchronous operations.

The `.catch()` method takes a callback function that is invoked when the promise is rejected. The callback function receives the rejection reason as an argument. It's generally recommended to include a `.catch()` at the end of the promise chain to handle any errors that might occur during the execution.

Promises also provide additional methods like `.finally()` and static methods like `Promise.all()` and `Promise.race()` for more advanced use cases.

In summary, promises in JavaScript provide a structured way to work with asynchronous operations, allowing you to handle successful results and error conditions more effectively. They simplify the handling of complex asynchronous code and enable better code organization and readability.