---
title: "JavaScript Web Storage"
seoTitle: "web storage"
datePublished: Thu Jul 20 2023 17:08:10 GMT+0000 (Coordinated Universal Time)
cuid: clkbeorgo000f0amd65269w6y
slug: javascript-web-storage
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1689872856474/bc799e97-7e6e-40fa-8ca7-52f219e960cd.png
tags: javascript

---

Certainly! Here's a cheat sheet for JavaScript Web Storage and Session Storage:

Web Storage:

* Web Storage provides two objects for storing data on the client-side: `localStorage` and `sessionStorage`.
    
* Both `localStorage` and `sessionStorage` have the same API and properties, but they differ in terms of persistence and scope.
    
* Data stored in Web Storage is saved as key-value pairs, where both the key and value are strings.
    

localStorage:

* Data stored in `localStorage` persists even after the browser is closed and reopened.
    
* It has no expiration date and remains stored until explicitly cleared.
    
* To store data in `localStorage`, use the `setItem(key, value)` method. Example: `localStorage.setItem('username', 'John')`.
    
* To retrieve data from `localStorage`, use the `getItem(key)` method. Example: `const username = localStorage.getItem('username')`.
    
* To remove an item from `localStorage`, use the `removeItem(key)` method. Example: `localStorage.removeItem('username')`.
    
* To clear all data stored in `localStorage`, use the `clear()` method. Example: `localStorage.clear()`.
    

sessionStorage:

* Data stored in `sessionStorage` is available only for the duration of the current browser session.
    
* When the browser window/tab is closed, the data is cleared and no longer accessible.
    
* `sessionStorage` methods (`setItem()`, `getItem()`, `removeItem()`, and `clear()`) are used in the same way as `localStorage`.
    

Example usage:

```javascript
// Storing data in localStorage
localStorage.setItem('username', 'John');
localStorage.setItem('email', 'john@example.com');

// Retrieving data from localStorage
const username = localStorage.getItem('username');
const email = localStorage.getItem('email');

console.log(username); // Output: John
console.log(email); // Output: john@example.com

// Removing an item from localStorage
localStorage.removeItem('email');

// Clearing all data from localStorage
localStorage.clear();
```

```javascript
// Storing data in sessionStorage
sessionStorage.setItem('theme', 'dark');
sessionStorage.setItem('language', 'JavaScript');

// Retrieving data from sessionStorage
const theme = sessionStorage.getItem('theme');
const language = sessionStorage.getItem('language');

console.log(theme); // Output: dark
console.log(language); // Output: JavaScript

// Removing an item from sessionStorage
sessionStorage.removeItem('language');

// Clearing all data from sessionStorage
sessionStorage.clear();
```

Remember, both `localStorage` and `sessionStorage` are subject to the same-origin policy. They can only be accessed by pages from the same origin (domain, protocol, and port number).