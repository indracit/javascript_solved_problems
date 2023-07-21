---
title: "Callback, Async, Await, Promises in JavaScript"
seoTitle: "Callback, Async, Await, Promises in JavaScript"
datePublished: Fri Jul 21 2023 13:42:59 GMT+0000 (Coordinated Universal Time)
cuid: clkcmsqkj000009jt1kb4f9al
slug: callback-async-await-promises-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1689946941891/e7e7a64c-0428-470f-a1f6-fcb7682d0679.png
tags: javascript

---

In JavaScript, callbacks, async/await, and promises are all related to handling asynchronous operations. They provide ways to write asynchronous code that is easier to read, write, and maintain. Let's take a closer look at each of them:

1. Callbacks: Callbacks are a traditional way of handling asynchronous operations in JavaScript. A callback function is a function that is passed as an argument to another function and gets executed when a certain event or asynchronous operation completes. This allows the code to continue running without waiting for the asynchronous operation to finish.
    

Example:

```javascript
function fetchData(callback) {
  setTimeout(function() {
    const data = 'Some data';
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log('Processed data:', data);
}

fetchData(processData);
```

In the above example, `fetchData` simulates an asynchronous operation that fetches some data. It takes a callback function as an argument and calls it with the fetched data after a delay of 2000ms.

1. Promises: Promises provide a more structured way of handling asynchronous operations and have become a standard in modern JavaScript. A promise represents the eventual completion or failure of an asynchronous operation and allows you to attach callbacks to handle the results.
    

Example:

```javascript
function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const data = 'Some data';
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then(function(data) {
    console.log('Fetched data:', data);
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
```

In the above example, `fetchData` returns a promise that resolves with the fetched data after a delay of 2000ms. The `.then()` method is used to handle the successful completion of the promise, and the `.catch()` method is used to handle any errors that occur during the promise's execution.

1. Async/Await: Async/await is a syntactical feature introduced in ES2017 that allows you to write asynchronous code in a more synchronous-like manner. It is built on top of promises and provides a more concise and readable way to deal with asynchronous operations.
    

Example:

```javascript
function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const data = 'Some data';
      resolve(data);
    }, 2000);
  });
}

async function processData() {
  try {
    const data = await fetchData();
    console.log('Processed data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

processData();
```

In the above example, the `fetchData` function returns a promise as before. The `processData` function is marked as `async` and uses the `await` keyword to pause the execution until the promise is resolved. It allows you to write asynchronous code that looks like synchronous code, making it easier to understand.

Note: Async/await can only be used within functions marked with the `async` keyword.