---
title: "Js events cheatsheet"
seoTitle: "Events in javaScript"
datePublished: Fri Jul 14 2023 09:19:38 GMT+0000 (Coordinated Universal Time)
cuid: clk2db4c600040am94koy4qzw
slug: js-events-cheatsheet
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1689326333152/093a7ae5-36d2-4b13-8612-48fd99325893.png
tags: javascript, web-development, reactjs

---

Certainly! Here's a cheat sheet for JavaScript events:

1. Mouse Events:
    
    * `click`: Occurs when the element is clicked.
        
    * `dblclick`: Occurs when the element is double-clicked.
        
    * `mouseover`: Occurs when the mouse pointer is moved onto the element.
        
    * `mouseout`: Occurs when the mouse pointer is moved off the element.
        
    * `mousedown`: Occurs when the mouse button is pressed down on the element.
        
    * `mouseup`: Occurs when the mouse button is released on the element.
        
2. Keyboard Events:
    
    * `keydown`: Occurs when a key is pressed down.
        
    * `keyup`: Occurs when a key is released.
        
    * `keypress`: Occurs when a key is pressed and released.
        
3. Form Events:
    
    * `submit`: Occurs when a form is submitted.
        
    * `input`: Occurs when the value of an input field changes.
        
    * `change`: Occurs when the value of a form element changes (e.g., select, checkbox).
        
4. Window Events:
    
    * `load`: Occurs when the document and its resources have finished loading.
        
    * `resize`: Occurs when the browser window is resized.
        
    * `scroll`: Occurs when the user scrolls the document.
        
5. Touch Events (for mobile devices):
    
    * `touchstart`: Occurs when a touch point is placed on the touchscreen.
        
    * `touchmove`: Occurs when a touch point is moved along the touchscreen.
        
    * `touchend`: Occurs when a touch point is removed from the touchscreen.
        
6. Event Handling:
    
    * `element.addEventListener('event', eventHandler)`: Attaches an event handler function to the element.
        
    * `element.removeEventListener('event', eventHandler)`: Removes an event handler function from the element.
        
    * `event.preventDefault()`: Prevents the default behavior of the event.
        
    * `event.stopPropagation()`: Stops the event from bubbling up to parent elements.
        

Remember that you can replace `'event'` with the specific event name, and `eventHandler` should be the function that will be called when the event occurs.

This is a basic overview of JavaScript events. The events available in your specific environment may vary, so it's always a good idea to refer to the official documentation for more details and examples.