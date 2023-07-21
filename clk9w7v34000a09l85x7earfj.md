---
title: "Modules Cheatsheet JavaScript"
seoTitle: "Modules in JavaScript Cheatsheet"
datePublished: Wed Jul 19 2023 15:43:22 GMT+0000 (Coordinated Universal Time)
cuid: clk9w7v34000a09l85x7earfj
slug: modules-cheatsheet-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1689781365519/f3ca2aaa-8581-438a-b402-503955a18514.png
tags: javascript

---

Certainly! Here's a cheat sheet for JavaScript modules:

1. Exporting:
    
    ```javascript
    // Exporting a named function
    export function functionName() {
      // Function implementation
    }
    
    // Exporting a named variable
    export const variableName = 10;
    
    // Exporting multiple items
    export { functionName, variableName };
    
    // Exporting a default item
    export default functionName;
    ```
    
2. Importing:
    
    ```javascript
    // Importing a named export
    import { functionName, variableName } from './module';
    
    // Importing a default export
    import functionName from './module';
    
    // Importing all exports (namespace import)
    import * as moduleName from './module';
    ```
    
3. Renaming imports and exports:
    
    ```javascript
    // Renaming named imports
    import { functionName as renamedFunction } from './module';
    
    // Renaming named exports
    export { functionName as renamedFunction };
    ```
    
4. Importing and exporting with aliases:
    
    ```javascript
    // Exporting with alias
    export { functionName as aliasName };
    
    // Importing with alias
    import { aliasName as functionName } from './module';
    ```
    
5. Importing and exporting everything from a module:
    
    ```javascript
    // Exporting everything from a module
    export * from './module';
    
    // Importing everything from a module
    import * as moduleName from './module';
    ```
    
6. Importing and exporting in Node.js (CommonJS):
    
    ```javascript
    // Exporting in CommonJS syntax
    module.exports = functionName;
    
    // Importing in CommonJS syntax
    const functionName = require('./module');
    ```
    
7. Dynamic imports:
    
    ```javascript
    import('./module')
      .then(module => {
        // Use the imported module
      })
      .catch(error => {
        // Handle the error
      });
    ```
    

Remember that JavaScript modules work in modern browsers and Node.js environments that support the ES modules syntax. For older browsers or Node.js versions, you might need a bundler like Webpack or a transpiler like Babel to convert module syntax to a compatible format.

This cheat sheet provides an overview of the most common scenarios, but there are additional features and techniques available when working with JavaScript modules.