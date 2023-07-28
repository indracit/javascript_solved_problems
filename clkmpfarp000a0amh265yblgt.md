---
title: "JavaScript class tutorial"
seoTitle: "JavaScript class tutorial"
datePublished: Fri Jul 28 2023 14:54:12 GMT+0000 (Coordinated Universal Time)
cuid: clkmpfarp000a0amh265yblgt
slug: javascript-class-tutorial
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690556031426/0d3ae1d2-a8b7-4fb8-af18-32a7e44dca70.png
tags: javascript

---

In JavaScript, classes provide a way to define reusable blueprints for creating objects with shared properties and methods. The class syntax was introduced in ECMAScript 2015 (ES6) and provides a more familiar syntax for creating and working with objects in an object-oriented programming (OOP) style.

Here's a detailed explanation of JavaScript classes:

Class Declaration: To declare a class, you use the `class` keyword followed by the name of the class. Here's the basic syntax:

```javascript
class MyClass {
  constructor() {
    // Constructor code
  }

  method1() {
    // Method code
  }

  method2() {
    // Method code
  }

  // ...
}
```

Constructor: The `constructor` method is a special method that gets called when an object is instantiated from the class. It's used to initialize the object's properties and perform any setup required. You define the constructor using the `constructor` keyword:

```javascript
class MyClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  // ...
}
```

Properties: You can define properties for class instances by assigning values to `this` within the constructor or any other class method. These properties are accessible throughout the class using the `this` keyword:

```javascript
class MyClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  method() {
    console.log(this.prop1);
    console.log(this.prop2);
  }
}
```

Methods: Methods are functions defined within a class that can perform actions or computations using the class's properties. You can define methods directly inside the class declaration:

```javascript
class MyClass {
  constructor() {
    // Constructor code
  }

  method1() {
    // Method code
  }

  method2() {
    // Method code
  }

  // ...
}
```

Inheritance: JavaScript classes support inheritance, which allows you to create a new class based on an existing class, inheriting its properties and methods. You can use the `extends` keyword to indicate the superclass (parent class) from which you want to inherit:

```javascript
class ChildClass extends ParentClass {
  constructor() {
    super(); // Calls the parent class constructor
    // Child class constructor code
  }

  // Child class methods
}
```

The `super()` keyword is used in the child class's constructor to call the parent class's constructor and initialize the inherited properties.

Static Methods: Static methods are methods that are called on the class itself rather than on instances of the class. You define a static method by using the `static` keyword:

```javascript
class MyClass {
  static staticMethod() {
    // Static method code
  }

  // ...
}
```

To call a static method, you use the class name directly:

```javascript
MyClass.staticMethod();
```

Getters and Setters: Getters and setters are special methods that allow you to define the behavior of getting and setting specific properties of an object. They provide control over reading and writing values to object properties. You can define them using the `get` and `set` keywords:

```javascript
class MyClass {
  constructor() {
    // Constructor code
  }

  get myProperty() {
    // Getter code
  }

  set myProperty(value) {
    // Setter code
  }
}
```

Usage: To create an instance of a class, you use the `new` keyword followed by the class name and any necessary arguments:

```javascript
const myObject = new MyClass(arg1, arg2);
```

You can then access the object's properties and

call its methods using the dot notation:

```javascript
myObject.prop1;
myObject.method1();
```

That's a detailed overview of JavaScript classes. They provide a structured and organized way to create objects and promote code reusability in JavaScript applications.

Certainly! Let's dive into a detailed explanation of JavaScript classes with an example.

```javascript
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} is speaking.`);
  }

  getAge() {
    return this.age;
  }

  static info() {
    console.log("This is the Animal class.");
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} is barking.`);
  }
}

// Creating instances of the classes
const animal = new Animal("Leo", 5);
const dog = new Dog("Max", 3, "Labrador");

// Accessing properties and calling methods
console.log(animal.name); // Output: Leo
animal.speak(); // Output: Leo is speaking.
console.log(dog.getAge()); // Output: 3
dog.speak(); // Output: Max is barking.

Animal.info(); // Output: This is the Animal class.
```

In this example, we have two classes: `Animal` and `Dog`.

The `Animal` class:

* The `constructor` method is called when creating a new instance of `Animal` and initializes the `name` and `age` properties of the object.
    
* The `speak` method logs a message indicating that the animal is speaking, using the `name` property.
    
* The `getAge` method returns the value of the `age` property.
    
* The `info` method is a static method, which means it can be called directly on the class itself. It logs a message indicating that it belongs to the `Animal` class.
    

The `Dog` class:

* The `Dog` class extends the `Animal` class using the `extends` keyword, indicating that it inherits from `Animal`.
    
* The `constructor` method of `Dog` calls the `super` method, which invokes the `Animal` class's constructor and sets the `name` and `age` properties using the provided arguments. Additionally, it initializes the `breed` property specific to `Dog` instances.
    
* The `speak` method is overridden in the `Dog` class to provide a specialized behavior for dogs. It logs a message indicating that the dog is barking, using the `name` property.
    

Creating instances: We create instances of the classes using the `new` keyword and passing the required arguments to the constructor.

Accessing properties and methods: We can access the properties and methods of the instances using the dot notation. For example, [`animal.name`](http://animal.name) gives us the name of the animal, and `dog.speak()` makes the dog instance bark.

Static methods: Static methods are accessed directly on the class itself, without needing to create an instance. In the example, we call [`Animal.info`](http://Animal.info)`()` to display the message indicating that it belongs to the `Animal` class.

This example demonstrates the concept of classes in JavaScript, inheritance with the `extends` keyword, creating instances, accessing properties and methods, and using static methods.