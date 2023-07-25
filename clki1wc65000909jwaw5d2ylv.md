---
title: "JavaScript Array methods"
seoTitle: "JavaScript Array methods"
datePublished: Tue Jul 25 2023 08:44:32 GMT+0000 (Coordinated Universal Time)
cuid: clki1wc65000909jwaw5d2ylv
slug: javascript-array-methods
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690274643062/e2d47743-e4ea-4c05-b669-783aaa811f36.png
tags: javascript

---

In JavaScript, an array is a data structure that allows you to store multiple values in a single variable. It is a fundamental part of the language and provides various methods to manipulate and interact with the data stored in the array. Here are some commonly used array methods in JavaScript:

1. **push**: Adds one or more elements to the end of an array and returns the new length of the array.
    

```javascript
const array = [1, 2, 3];
array.push(4);
console.log(array); // Output: [1, 2, 3, 4]
```

1. **pop**: Removes the last element from an array and returns that element.
    

```javascript
const array = [1, 2, 3];
const removedElement = array.pop();
console.log(removedElement); // Output: 3
console.log(array); // Output: [1, 2]
```

1. **concat**: Combines two or more arrays and returns a new array.
    

```javascript
const array1 = [1, 2];
const array2 = [3, 4];
const newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4]
```

1. **join**: Joins all elements of an array into a string, using a specified separator.
    

```javascript
const array = [1, 2, 3];
const joinedString = array.join('-');
console.log(joinedString); // Output: "1-2-3"
```

1. **slice**: Returns a shallow copy of a portion of an array into a new array.
    

```javascript
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(2, 4);
console.log(newArray); // Output: [3, 4]
```

1. **splice**: Changes the contents of an array by removing, replacing, or adding elements.
    

```javascript
const array = [1, 2, 3, 4, 5];
array.splice(2, 1, 'a', 'b');
console.log(array); // Output: [1, 2, 'a', 'b', 4, 5]
```

1. **forEach**: Executes a provided function once for each array element.
    

```javascript
const array = [1, 2, 3];
array.forEach((element) => {
  console.log(element);
});
// Output:
// 1
// 2
// 3
```

These are just a few examples of the array methods available in JavaScript. There are many more methods and properties that you can use to manipulate and work with arrays efficiently.