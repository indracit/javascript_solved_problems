---
title: "Objects in JavaScript"
seoTitle: "Objects in JavaScript"
datePublished: Sat Aug 05 2023 05:03:51 GMT+0000 (Coordinated Universal Time)
cuid: clkxjux7z000c08kybkz34s6r
slug: objects-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1691211810116/c8aa5878-c78b-45c1-becc-f2047149df55.png
tags: javascript

---

JavaScript objects are a fundamental part of the language and are used to store and manipulate data. Objects are a collection of key-value pairs where the keys are strings (or symbols in ES6+) and the values can be of any data type, including other objects. Objects provide a way to organize and structure data, making it easier to access and modify.

Creating Objects: There are several ways to create objects in JavaScript:

## 1\. Object Literal:

The simplest way to create an object is by using the object literal syntax, where you define the object properties and their values within curly braces `{}`.

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
```

## 2\. Object Constructor:

Another way to create an object is by using the `Object` constructor and the `new` keyword.

```javascript
const person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";
```

## 3\. Object.create:

The `Object.create()` method allows you to create a new object with a specified prototype object.

```javascript
const person = Object.create(null);
person.name = "John";
person.age = 30;
person.city = "New York";
```

Accessing Object Properties: You can access object properties using dot notation ([`object.property`](http://object.property)) or bracket notation (`object['property']`).

```javascript
console.log(person.name);  // Output: John
console.log(person['age']); // Output: 30
```

Modifying Object Properties: You can modify object properties by assigning new values to them.

```javascript
person.age = 31;
person['city'] = "San Francisco";
```

Adding and Removing Properties: You can add new properties to an object by assigning values to them. Similarly, you can delete properties using the `delete` keyword.

```javascript
person.gender = "Male";  // Adding a new property
delete person.city;     // Removing the 'city' property
```

Iterating over Object Properties: To iterate over the properties of an object, you can use a `for...in` loop.

```javascript
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

Object Methods: Objects can also have methods, which are simply object properties that are functions.

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet();  // Output: Hello, my name is John
```

Inheritance: JavaScript objects can inherit properties and methods from other objects using prototypes. Every object has an internal link to its prototype, which is another object.

```javascript
const parent = {
  parentMethod: function() {
    console.log("This is a parent method.");
  }
};

const child = Object.create(parent);
child.childMethod = function() {
  console.log("This is a child method.");
};

child.parentMethod();  // Output: This is a parent method.
child.childMethod();   // Output: This is a child method.
```

This is just a brief overview of JavaScript objects. Objects in JavaScript are a vast topic, and there are many more concepts to explore, such as object constructors, prototypes, classes (introduced in ES6), and more.