---
title: "Java script DOM Cheat sheet"
seoTitle: "content"
seoDescription: "javascript DOM"
datePublished: Thu Jul 13 2023 06:38:57 GMT+0000 (Coordinated Universal Time)
cuid: clk0s4mhe00120amk5a05a5pu
slug: java-script-dom-cheat-sheet
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1689230214587/5feb8ca0-ddf5-4ba7-96c2-3aa11f57f23f.png
tags: javascript, nodejs, dom, reactjs

---

Certainly! Here's a cheat sheet for JavaScript DOM (Document Object Model) manipulation:

1. Accessing Elements:
    
    * `document.getElementById('elementId')`: Returns the element with the specified ID.
        
    * `document.getElementsByClassName('className')`: Returns an array-like object of elements with the specified class name.
        
    * `document.getElementsByTagName('tagName')`: Returns an array-like object of elements with the specified tag name.
        
    * `document.querySelector('selector')`: Returns the first element that matches the specified CSS selector.
        
    * `document.querySelectorAll('selector')`: Returns a NodeList containing all elements that match the specified CSS selector.
        
2. Modifying Elements:
    
    * `element.innerHTML = 'new content'`: Sets the HTML content of the element.
        
    * `element.textContent = 'new text'`: Sets the text content of the element.
        
    * `element.setAttribute('attribute', 'value')`: Sets the value of the specified attribute.
        
    * [`element.style.property`](http://element.style.property) `= 'value'`: Sets the value of a CSS property for the element.
        
3. Manipulating Classes:
    
    * `element.classList.add('className')`: Adds a class to the element.
        
    * `element.classList.remove('className')`: Removes a class from the element.
        
    * `element.classList.toggle('className')`: Toggles a class on the element.
        
    * `element.classList.contains('className')`: Checks if the element has a specific class.
        
4. Creating and Appending Elements:
    
    * `document.createElement('tagName')`: Creates a new element with the specified tag name.
        
    * `parentElement.appendChild(newElement)`: Appends a new element as the last child of a parent element.
        
5. Event Handling:
    
    * `element.addEventListener('event', eventHandler)`: Attaches an event handler function to the element.
        
    * `element.removeEventListener('event', eventHandler)`: Removes an event handler function from the element.
        
6. Traversing the DOM:
    
    * `element.parentNode`: Returns the parent node of the element.
        
    * `element.childNodes`: Returns an array-like object of the child nodes of the element.
        
    * `element.firstChild`: Returns the first child node of the element.
        
    * `element.lastChild`: Returns the last child node of the element.
        
    * `element.nextElementSibling`: Returns the next sibling node of the element.
        
    * `element.previousElementSibling`: Returns the previous sibling node of the element.
        

These are some common DOM manipulation methods and properties in JavaScript. Remember to always refer to the official documentation for more details and examples.