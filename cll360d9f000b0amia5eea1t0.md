---
title: "Shallow Copy and Deep copy in JavaScript"
seoTitle: "Shallow Copy and Deep copy in JavaScript"
datePublished: Wed Aug 09 2023 03:22:48 GMT+0000 (Coordinated Universal Time)
cuid: cll360d9f000b0amia5eea1t0
slug: shallow-copy-and-deep-copy-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1691551319043/8fcf517f-c25a-4313-af42-42468cb6f19c.png
tags: javascript

---

In JavaScript, when you work with objects and arrays, you may encounter the concepts of deep copy and shallow copy. These concepts refer to different ways of copying an object or an array and determine how the copied data is stored and referenced. Let's explore each concept in detail:

## Shallow Copy:

A shallow copy creates a new object or array, but the inner values of the copied object are still references to the original object's values. In other words, the new copy contains references to the same objects or arrays as the original. Any changes made to the original object's properties or nested objects will be reflected in the copied object, and vice versa. Shallow copy is the default behavior for most JavaScript operations.

Here's an example to illustrate shallow copying an object:

```javascript
const original = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'swimming']
};

const shallowCopy = Object.assign({}, original);

shallowCopy.name = 'Jane';
shallowCopy.hobbies.push('running');

console.log(original);     // { name: 'John', age: 30, hobbies: ['reading', 'swimming', 'running'] }
console.log(shallowCopy);  // { name: 'Jane', age: 30, hobbies: ['reading', 'swimming', 'running'] }
```

In this example, `Object.assign()` is used to create a shallow copy of the `original` object. Modifying the `name` property in the `shallowCopy` does not affect the `original` object. However, when we push a new hobby into the `hobbies` array in the `shallowCopy`, the same change is reflected in the `original` object because both objects share the same reference to the `hobbies` array.

## Deep Copy:

A deep copy creates a completely independent copy of an object or array, including all nested objects and arrays. It ensures that any changes made to the original object do not affect the copied object, and vice versa. Deep copying can be useful when you want to work with a separate instance of an object and modify it independently.

There are multiple ways to achieve a deep copy in JavaScript, and the appropriate method depends on the complexity of the object you're copying. Here's an example using the `JSON.parse()` and `JSON.stringify()` methods:

```javascript
const original = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'swimming']
};

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.name = 'Jane';
deepCopy.hobbies.push('running');

console.log(original);  // { name: 'John', age: 30, hobbies: ['reading', 'swimming'] }
console.log(deepCopy);  // { name: 'Jane', age: 30, hobbies: ['reading', 'swimming', 'running'] }
```

In this example, the `JSON.stringify()` method converts the `original` object to a JSON string, and then `JSON.parse()` parses the JSON string to create a new object (`deepCopy`). This method effectively creates a deep copy since it creates a new object with all its values and nested objects or arrays.

It's worth noting that this method has limitations. It won't work if the object contains functions, symbols, or cyclic references (references to itself or other objects that form a loop). In such cases, you may need to use custom deep copying algorithms or libraries like Lodash's `cloneDeep()`.

In summary, shallow copy and deep copy in JavaScript refer to different ways of copying objects or arrays. Shallow copy creates a new object that references the same values as the original, while deep copy creates a completely independent copy, including all nested objects or

arrays.