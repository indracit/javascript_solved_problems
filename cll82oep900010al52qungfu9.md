---
title: "Debouncing in JavaScript"
seoTitle: "Debouncing in JavaScript"
datePublished: Sat Aug 12 2023 13:48:22 GMT+0000 (Coordinated Universal Time)
cuid: cll82oep900010al52qungfu9
slug: debouncing-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1691848074178/ff3946c0-c693-4b03-9c2e-45d3e148846b.png
tags: javascript

---

Sure! Debouncing is a technique in JavaScript used to control the frequency of a function's execution. It is commonly used in scenarios where a function is called multiple times in a short period, such as when handling user inputs like scroll events, resizing the window, or keystrokes. Debouncing ensures that the function is only executed after a certain cooldown period, allowing for better performance and optimization.

Here's a simple tutorial on how to implement debouncing in JavaScript:

## Step 1: Create a debounce function

```javascript
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
```

The `debounce` function takes two arguments: `func` (the function you want to debounce) and `delay` (the time in milliseconds to wait before calling the debounced function).

## Step 2: Use the debounce function

```javascript
function search(query) {
  // Your search logic here
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 500);

// Example usage: Call the debouncedSearch function when handling user input
document.getElementById("search-input").addEventListener("input", function (event) {
  debouncedSearch(event.target.value);
});
```

In this example, we have a `search` function that handles the search logic. The `debouncedSearch` variable holds the debounced version of the `search` function, with a delay of 500 milliseconds.

We attach an event listener to an input element (with the id "search-input" in this case), and every time the user types into the input, it calls `debouncedSearch`, which will execute the `search` function but only after a 500ms delay. If the user types within that 500ms period, the timer resets, and the function will be called again after the new delay.

This ensures that the search function is not called too frequently, preventing unnecessary computations and potential performance issues.

Remember to adjust the `delay` value based on your specific use case. Smaller values will make the function fire more frequently, while larger values will introduce more significant delays.

That's it! You have now implemented debouncing in JavaScript.