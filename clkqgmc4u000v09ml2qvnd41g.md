---
title: "Symbol in JavaScript"
seoTitle: "Symbol in JavaScript"
datePublished: Mon Jul 31 2023 05:58:49 GMT+0000 (Coordinated Universal Time)
cuid: clkqgmc4u000v09ml2qvnd41g
slug: symbol-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690783095249/78459223-8080-4160-8f26-9e625ff27953.png
tags: javascript

---

In JavaScript, symbols are a primitive data type introduced in ECMAScript 2015 (ES6). They are unique and immutable values that can be used as property keys in objects. Symbols are often used to define private or unique property names, preventing unintentional name collisions in objects.

To create a symbol in JavaScript, you can use the `Symbol()` function, like this:

```javascript
const mySymbol = Symbol();
```

You can also provide a description as an optional parameter when creating a symbol:

```javascript
const mySymbol = Symbol('My symbol');
```

Symbols with the same description are not equal to each other. Every symbol created using the `Symbol()` function is guaranteed to be unique, even if they have the same description.

Symbols have several unique properties and methods associated with them:

1. **Uniqueness**: Symbols are guaranteed to be unique. Even if you create multiple symbols with the same description, they will be distinct values.
    
2. **Non-enumerability**: Symbols are non-enumerable, meaning they won't show up in `for...in` loops or `Object.keys()` iterations. This makes them useful for defining private properties.
    
3. **Object property keys**: Symbols can be used as property keys in objects, providing a way to define non-colliding property names.
    
4. **Global symbol registry**: Symbols can be registered in a global symbol registry, allowing you to share symbols across different parts of your codebase.
    

Here's an example demonstrating the usage of symbols:

```javascript
const firstName = Symbol('First Name');
const person = {
  [firstName]: 'John',
  age: 30
};

console.log(person[firstName]); // Output: John

// Symbols are not enumerable
console.log(Object.keys(person)); // Output: ['age']
```

Symbols are mainly used for specific use cases like defining private properties or creating unique identifiers. They provide a way to avoid naming conflicts and enhance the safety and encapsulation of JavaScript code.