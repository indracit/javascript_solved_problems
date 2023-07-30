---
title: "Set and Map in JavaScript"
seoTitle: "Set and Map in JavaScript"
datePublished: Sun Jul 30 2023 04:11:42 GMT+0000 (Coordinated Universal Time)
cuid: clkoxcqd5000009mlhvgl4wfp
slug: set-and-map-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690690288258/36a154b2-cac8-448b-91c8-e0a78dffb52a.png
tags: javascript

---

Certainly! In JavaScript, both `Set` and `Map` are built-in objects that provide data structures for storing collections of values.

## Set:

A `Set` is an unordered collection of unique values, where each value can occur only once. Here's an example of how you can use a `Set`:

```javascript
// Creating a Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);

// Adding duplicate values (ignored in a Set)
mySet.add(1);

// Checking the size of the Set
console.log(mySet.size); // Output: 3

// Checking if a value exists in the Set
console.log(mySet.has(2)); // Output: true

// Deleting a value from the Set
mySet.delete(3);

// Clearing all values from the Set
mySet.clear();

// Iterating over the Set
mySet.add("apple");
mySet.add("banana");
mySet.add("orange");

for (const item of mySet) {
  console.log(item);
}
// Output:
// "apple"
// "banana"
// "orange"
```

## Map:

A `Map` is a collection of key-value pairs, where each key is unique, and the keys and values can be of any type. Here's an example of how you can use a `Map`:

```javascript
// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "John");
myMap.set("age", 30);

// Getting values from the Map
console.log(myMap.get("name")); // Output: "John"

// Checking if a key exists in the Map
console.log(myMap.has("age")); // Output: true

// Deleting a key-value pair from the Map
myMap.delete("age");

// Checking the size of the Map
console.log(myMap.size); // Output: 1

// Clearing all key-value pairs from the Map
myMap.clear();

// Iterating over the Map
myMap.set("name", "John");
myMap.set("age", 30);

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// "name: John"
// "age: 30"
```

Both `Set` and `Map` provide efficient methods for adding, deleting, and retrieving elements from the collections. The main difference is that `Set` is focused on storing unique values, while `Map` is focused on key-value pairs.