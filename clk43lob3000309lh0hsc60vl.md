---
title: "Hoisting with let and const"
seoTitle: "hosting with let and const"
datePublished: Sat Jul 15 2023 14:23:27 GMT+0000 (Coordinated Universal Time)
cuid: clk43lob3000309lh0hsc60vl
slug: hoisting-with-let-and-const
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1689430950325/e2cb57be-a21f-4a34-8046-5f55642d15d0.png
tags: javascript, reactjs

---

In JavaScript, hoisting is a mechanism where variable and function declarations are moved to the top of their containing scope before the code is executed. This allows you to use variables and functions before they are actually declared in your code. However, there is a difference in hoisting behavior between variables declared with `var` and those declared with `let` or `const`.

With `var`, variable declarations are hoisted to the top of their containing scope, but their assignments are not. This means that you can access and use the variables before they are declared, but they will have an initial value of `undefined` until their assignment is encountered in the code.

Let's see an example:

```javascript
console.log(x); // undefined
var x = 10;
console.log(x); // 10
```

In the example above, the variable `x` is hoisted to the top of its scope (global scope in this case), so the first `console.log` statement does not throw an error. However, the value of `x` is `undefined` until the assignment `var x = 10;` is reached.

On the other hand, variables declared with `let` and `const` are hoisted to the top of their containing block, but they are not initialized. This means that you cannot access or use them before their declaration. Trying to access a `let` or `const` variable before it's declared will result in a `ReferenceError`.

Let's see an example:

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // 20
```

In this example, the variable `y` is hoisted to the top of its block, but since it is a `let` variable, accessing it before its declaration results in an error.

To summarize, while both `var` and `let`/`const` declarations are hoisted, `var` declarations are hoisted along with their assignments (with an initial value of `undefined`), whereas `let` and `const` declarations are hoisted without being initialized, and you cannot access them before their declaration. It is considered good practice to declare variables at the beginning of their scope to avoid confusion and potential issues with hoisting.