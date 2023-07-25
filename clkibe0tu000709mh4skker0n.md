---
title: "User input in JavaScript"
seoTitle: "User input in JavaScript"
datePublished: Tue Jul 25 2023 13:10:13 GMT+0000 (Coordinated Universal Time)
cuid: clkibe0tu000709mh4skker0n
slug: user-input-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690290585663/56408dad-2ba0-418c-b677-63208f12988d.png
tags: javascript

---

To receive user input in JavaScript, you can use the `prompt()` function or interact with HTML elements. Here's an example of both approaches:

1. Using `prompt()`:
    

```javascript
let userInput = prompt("Please enter your name:");
console.log("Hello, " + userInput + "!");
```

In this example, the `prompt()` function will display a dialog box with the message "Please enter your name:". The user can enter their name, and the value will be stored in the `userInput` variable. The name will then be printed in the console.

1. Using HTML elements:
    

```html
<!DOCTYPE html>
<html>
<head>
  <title>User Input Example</title>
</head>
<body>
  <label for="nameInput">Name:</label>
  <input type="text" id="nameInput">
  <button onclick="greetUser()">Submit</button>

  <script>
    function greetUser() {
      let userInput = document.getElementById("nameInput").value;
      console.log("Hello, " + userInput + "!");
    }
  </script>
</body>
</html>
```

In this example, an HTML page contains an input field and a button. When the button is clicked, the `greetUser()` function is called. The function retrieves the value entered in the input field using `getElementById()` and assigns it to the `userInput` variable. Finally, the name is printed in the console.

These examples demonstrate two common methods to obtain user input in JavaScript. The appropriate method depends on your specific use case and the context in which you're working.