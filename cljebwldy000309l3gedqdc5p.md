---
title: "Object prototype in Javascript"
seoTitle: "Object prototype in Javascript"
datePublished: Tue Jun 27 2023 13:33:53 GMT+0000 (Coordinated Universal Time)
cuid: cljebwldy000309l3gedqdc5p
slug: object-prototype-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1687872760669/24ad9a7d-872e-46ce-8163-d4caed190620.png
tags: javascript, nodejs, prototype, reactjs

---

In JavaScript, the object prototype is a mechanism that allows objects to inherit properties and methods from other objects. Objects in JavaScript has an internal link to its prototype, which is another object. The prototype serves as a fallback for properties and methods that are not directly defined on the object itself.

Note : Not all the objects has prototype property, we can create Object without prototype property by passing null in Object.create method.

```javascript
const emptyObj = Object.create(null)
console.log(emptyObj.__proto__) //undefined
console.log(emptyObj) // {}
```

![empty obj](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dbe251tsjd16yd4vmkp9.png align="left")

```javascript
emptyObj.name='indracit';
console.log(emptyObj)
```

![obj with out proto](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qgl62bf95hz9yos152rr.png align="left")

```javascript
const obj = {};
console.log(obj);
```

![console image1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tz3ceww7kxatiup6c0ub.png align="left")

![console image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sw0adussupgqcq5qgobh.png align="left")

```javascript
// Creating an object
var person = {
  name: "John",
  age: 30,
};

// Creating another object
var employee = {
  salary: 50000,
};

// Linking the prototype of employee to person
employee.__proto__ = person;

// Accessing properties
console.log(employee.name);  // Output: "John"
console.log(employee.age);   // Output: 30
console.log(employee.salary); // Output: 50000
```

## Prototype Chain:

When you access a property or method on an object, JavaScript first checks if the object itself has that property or method. If it doesn't, it looks up the prototype chain to find the property or method on the prototype object. This process continues until the property or method is found or until the end of the prototype chain is reached.

The prototype chain is formed when objects are created. Every object is linked to a prototype object, which is either the default `Object.prototype` or a custom object prototype set explicitly.

## Accessing the Prototype:

The prototype of an object can be accessed using the `Object.getPrototypeOf()` method or the `__proto__` property.

```javascript
const obj = {};
const prototype = Object.getPrototypeOf(obj);
console.log(prototype === Object.prototype);  // Output: true

// or

console.log(obj.__proto__ === Object.prototype);  // Output: true
```

## Modifying the Prototype:

You can modify the prototype object to add new properties and methods that will be accessible to all objects linked to that prototype.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

const person = new Person("John");
person.greet();  // Output: Hello, my name is John
```

In this example, the `greet` method is added to the `Person.prototype`. Since `person` is an instance of `Person`, it can access the `greet` method even though it is not directly defined on the `person` object.

Changing the prototype object affects all instances and future instances created from the constructor. However, modifying properties directly on an instance does not affect other instances or the prototype.

```javascript
Person.prototype.age = 30;

console.log(person.age);  // Output: 30

person.age = 35;  // Modifying the 'age' property directly on the instance

console.log(person.age);          // Output: 35
console.log(Person.prototype.age); // Output: 30
```

## Inheritance:

The prototype chain allows for prototypal inheritance, where objects inherit properties and methods from their prototypes. You can create an object that inherits from another object by setting the prototype of the child object to the parent object.

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

In this example, `child` is an object that inherits from `parent`. The `Object.create()` method creates a new object with its prototype set to the specified object (`parent` in this case).

The prototype mechanism in JavaScript provides a way to implement inheritance and share behavior among objects efficiently. It allows you to create object hierarchies, override inherited methods, and extend the functionality of objects. Prototypes are a key concept in JavaScript's object-oriented programming paradigm and are widely used in the language.

## SUMMARY:

The prototype chain in JavaScript allows objects to inherit properties and methods from their prototypes. Let's explore the prototype chain in more detail:

## 1\. Prototype:

Objects in JavaScript has an associated prototype, which is an object that serves as a template or blueprint for that object. The prototype contains properties and methods that are shared among all instances created from the same constructor or linked to the same prototype.

## 2\. **proto** Property:

The `__proto__` property is a reference to the prototype object of an instance. It provides a way to access and manipulate the prototype directly, although it is recommended to use the `Object.getPrototypeOf()` method for better compatibility and code clarity.

## 3\. Object.prototype:

The `Object.prototype` is the default prototype for all objects in JavaScript. It includes common properties and methods, such as `toString()`, `hasOwnProperty()`, and `valueOf()`, which are inherited by all objects unless overridden.

## 4\. Prototype Chain:

The prototype chain is a series of links between objects, formed through the `__proto__` property. When a property or method is accessed on an object, JavaScript first checks if the object itself has that property or method. If not found, it looks up the prototype chain by following the `__proto__` links until the property or method is found or until the end of the chain (reaching `Object.prototype`).

## 5\. Inheritance:

By setting the prototype of an object to another object, you establish a prototype-based inheritance relationship. Inheritance allows objects to inherit properties and methods from their prototypes, enabling code reuse and hierarchical organization of objects.

## 6\. Modifying the Prototype:

The prototype object can be modified by adding or modifying properties and methods. Any changes made to the prototype will be reflected in all objects linked to that prototype. However, modifying properties directly on instances does not affect other instances or the prototype.

## 7\. Performance Considerations:

While the prototype chain allows for powerful inheritance mechanisms, excessive lookups in the prototype chain can impact performance. It is generally recommended to keep the prototype chain shallow and avoid deep nesting of objects.

It's worth noting that ECMAScript 2015 (ES6) introduced the `class` syntax, which provides a more familiar and structured way to define objects and their prototypes. Under the hood, `class` in JavaScript still relies on prototypes and the prototype chain.

Overall, the prototype chain is a core concept in JavaScript that enables object-oriented programming and inheritance, allowing objects to share behavior and access properties and methods from their prototypes.