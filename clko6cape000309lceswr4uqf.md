---
title: "Constructor Function in JavaScript"
seoTitle: "Constructor Function in JavaScript"
datePublished: Sat Jul 29 2023 15:35:32 GMT+0000 (Coordinated Universal Time)
cuid: clko6cape000309lceswr4uqf
slug: constructor-function-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690644913089/2d6c7e52-383a-4b1e-b8ab-129861276ff1.png
tags: javascript

---

Sure! In JavaScript, constructor functions are used to create objects with specific properties and behaviors. They are a traditional way of defining objects before the introduction of the class syntax in ECMAScript 2015 (ES6). Here's a tutorial on JavaScript constructor functions with an example:

Step 1: Define the Constructor Function A constructor function is defined using a regular function declaration or expression. It should start with an uppercase letter to indicate that it's a constructor. Let's create a `Person` constructor function:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

In this example, the `Person` constructor function takes two parameters: `name` and `age`. Inside the constructor function, we use the `this` keyword to refer to the object being created and assign the `name` and `age` parameters to properties of the object.

Step 2: Create Instances with the `new` Keyword To create instances of the object, we use the `new` keyword followed by the constructor function name and any necessary arguments. This will create a new object and assign it to the `this` keyword inside the constructor function. Let's create two instances of `Person`:

```javascript
const john = new Person("John", 30);
const jane = new Person("Jane", 25);
```

In this example, we create `john` and `jane` instances of `Person` with different names and ages.

Step 3: Access Properties and Methods We can access the properties and methods of the created objects using the dot notation. Let's add a method to the `Person` constructor function:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
}
```

The `sayHello` method logs a message with the person's name. We can now call this method on the created objects:

```javascript
john.sayHello(); // Output: Hello, my name is John.
jane.sayHello(); // Output: Hello, my name is Jane.
```

Step 4: Prototype for Shared Methods To optimize memory usage and avoid duplicating methods for each instance, we can use the prototype property. The prototype is an object that is shared among all instances of the constructor function. Let's define the `sayHello` method using the prototype:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}.`);
};
```

Now, the `sayHello` method is defined on the `Person.prototype` object. The instances will still have access to this method, but it won't be duplicated for each instance.

Constructor functions are a fundamental concept in JavaScript and allow you to create objects with shared properties and behaviors. However, with the introduction of the class syntax in ES6, classes provide a more modern and readable way to define objects and their behaviors.