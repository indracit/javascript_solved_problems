---
title: "String and Array methods in JavaScript"
seoTitle: "String and Array methods in JavaScript"
datePublished: Thu Aug 03 2023 12:50:44 GMT+0000 (Coordinated Universal Time)
cuid: clkv5nmtp000b0amod3u53dvq
slug: string-and-array-methods-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1691067015066/2652c18f-0894-4221-beb9-bbba40149439.png
tags: javascript

---

In JavaScript, there are several built-in string methods that allow you to manipulate and perform operations on strings. Here are some commonly used string methods in JavaScript:

1. `length`: This property returns the length of a string.
    

```javascript
const str = "Hello";
console.log(str.length); // Output: 5
```

1. `charAt(index)`: This method returns the character at a specified index in a string.
    

```javascript
const str = "Hello";
console.log(str.charAt(0)); // Output: "H"
console.log(str.charAt(4)); // Output: "o"
```

1. `concat(string1, string2, ..., stringN)`: This method combines multiple strings and returns a new concatenated string.
    

```javascript
const str1 = "Hello";
const str2 = " world";
console.log(str1.concat(str2)); // Output: "Hello world"
```

1. `toLowerCase()`: This method converts a string to lowercase.
    

```javascript
const str = "HELLO";
console.log(str.toLowerCase()); // Output: "hello"
```

1. `toUpperCase()`: This method converts a string to uppercase.
    

```javascript
const str = "hello";
console.log(str.toUpperCase()); // Output: "HELLO"
```

1. `slice(startIndex, endIndex)`: This method extracts a section of a string and returns a new string.
    

```javascript
const str = "Hello world";
console.log(str.slice(0, 5)); // Output: "Hello"
console.log(str.slice(6)); // Output: "world"
```

1. `indexOf(substring, startIndex)`: This method returns the index of the first occurrence of a substring within a string.
    

```javascript
const str = "Hello world";
console.log(str.indexOf("world")); // Output: 6
```

1. `replace(searchValue, replaceValue)`: This method replaces a substring with another substring in a string.
    

```javascript
const str = "Hello world";
console.log(str.replace("world", "John")); // Output: "Hello John"
```

1. `split(separator)`: This method splits a string into an array of substrings based on a specified separator.
    

```javascript
const str = "Hello,world";
console.log(str.split(",")); // Output: ["Hello", "world"]
```

1. `trim()`: This method removes leading and trailing whitespace from a string.
    

```javascript
const str = "   Hello world   ";
console.log(str.trim()); // Output: "Hello world"
```

These are just a few examples of string methods available in JavaScript. There are more methods and properties you can explore in the JavaScript documentation to perform various operations on strings.

In JavaScript, arrays come with a variety of built-in methods that make it easier to manipulate and work with array data. Here are some commonly used array methods in JavaScript:

1. `push(element1, element2, ..., elementN)`: This method adds one or more elements to the end of an array and returns the new length of the array.
    

```javascript
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "orange"]
```

1. `pop()`: This method removes the last element from an array and returns that element.
    

```javascript
const fruits = ["apple", "banana", "orange"];
const removedElement = fruits.pop();
console.log(fruits); // Output: ["apple", "banana"]
console.log(removedElement); // Output: "orange"
```

1. `concat(array1, array2, ..., arrayN)`: This method combines two or more arrays and returns a new array.
    

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
```

1. `join(separator)`: This method joins all elements of an array into a string, using a specified separator.
    

```javascript
const fruits = ["apple", "banana", "orange"];
const joinedString = fruits.join(", ");
console.log(joinedString); // Output: "apple, banana, orange"
```

1. `reverse()`: This method reverses the order of the elements in an array.
    

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]
```

1. `slice(startIndex, endIndex)`: This method extracts a section of an array and returns a new array.
    

```javascript
const numbers = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]
```

1. `indexOf(element, startIndex)`: This method returns the index of the first occurrence of an element within an array.
    

```javascript
const fruits = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana")); // Output: 1
```

1. `splice(startIndex, deleteCount, item1, item2, ..., itemN)`: This method changes the contents of an array by removing or replacing existing elements or adding new elements.
    

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 6, 7);
console.log(numbers); // Output: [1, 2, 6, 7, 4, 5]
```

1. `forEach(callbackFunction)`: This method executes a provided function once for each array element.
    

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number * 2);
});
// Output:
// 2
// 4
// 6
// 8
// 10
```

1. `filter(callbackFunction)`: This method creates a new array with all elements that pass the test implemented by the provided function.
    

```javascript
const numbers = [1, 2, 3, 4, 

5];
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]
```

These are just a few examples of array methods available in JavaScript. There are many more methods and properties you can explore in the JavaScript documentation to manipulate arrays based on your specific needs.