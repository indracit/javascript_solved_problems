---
title: "this in JavaScript"
seoTitle: "this in JavaScript"
datePublished: Thu Jul 27 2023 03:16:23 GMT+0000 (Coordinated Universal Time)
cuid: clkkl21t5000009mnb4pm4jen
slug: this-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690427762746/b452a1ba-7e5d-4a1b-9ad7-92f8e72cf373.png
tags: javascript

---

In JavaScript, the `this` keyword refers to the context in which a function is executed. Its value is determined by how a function is called, and it can vary depending on the invocation method. The `this` keyword allows you to access properties and methods within the current object or the context in which a function is being executed.

Here are a few common use cases and behaviors of the `this` keyword:

1. Global Scope: When `this` is used in the global scope (outside of any function or object), it refers to the global object, which is usually the `window` object in a web browser or the `global` object in Node.js.
    

```javascript
console.log(this); // refers to the global object (window in a browser)
```

1. Function Context: When `this` is used within a regular function (not an arrow function), its value is determined by how the function is invoked.
    
    a. Function Invocation: When a function is invoked as a standalone function, `this` inside the function will also refer to the global object (`window` in a browser). In strict mode, however, `this` will be `undefined`.
    
    ```javascript
    function myFunction() {
      console.log(this);
    }
    myFunction(); // refers to the global object (window in a browser)
    ```
    
    b. Method Invocation: When a function is invoked as a method of an object, `this` refers to the object that owns the method.
    
    ```javascript
    const obj = {
      name: 'John',
      sayHello: function() {
        console.log('Hello, ' + this.name);
      }
    };
    obj.sayHello(); // refers to the obj object: Hello, John
    ```
    
2. Constructor Invocation: When a function is used as a constructor function with the `new` keyword, `this` inside the constructor function refers to the newly created object.
    

```javascript
function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.name); // John
```

1. Event Handler: When a function is used as an event handler, `this` typically refers to the element on which the event occurred.
    

```javascript
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // refers to the button element
});
```

Note that the behavior of `this` can be altered using methods like `bind`, `call`, or `apply`, where you explicitly set the value of `this` for a function.

It's important to understand how `this` behaves in different scenarios, as it can be a source of confusion if not used correctly.