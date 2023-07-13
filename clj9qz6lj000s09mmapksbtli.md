---
title: "Class Component in React"
seoTitle: "React class components"
datePublished: Sat Jun 24 2023 08:36:57 GMT+0000 (Coordinated Universal Time)
cuid: clj9qz6lj000s09mmapksbtli
slug: class-component-in-react
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1687595629536/eb37e1b2-2b0a-401a-abe4-45daabf484b4.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1687595740427/d55f777b-95eb-4606-9d3d-3ce71bacc3d8.png
tags: javascript, web-development, reactjs, class-based-components

---

React class components are a way to create reusable and stateful components in React. They are defined as JavaScript classes that extend the Component class. Class components have their own internal state, which allows them to manage and update data within the component.

Here's an example of a simple React class component:

```javascript
// App.jsx

import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter:0
    }
    this.handleClick = this.handleClick.bind(this)
  }

handleClick(num) {

      this.setState( () => {
        if(this.state.counter < 0 ) {
          return { counter : 0 }
        }
        return { counter : this.state.counter + num } } )
    }

 render() {
    return (
      <div className='App-header App'>
        <Counter state = {this.state} handleClick={this.handleClick}/>
      </div>
    );
  }
}
```

In the example above, we define a class called App that extends the Component class. The render() method is a required method in React class components and is responsible for returning the JSX markup that will be rendered to the DOM.

To define and use state in a class component, you need to define a constructor() method and initialize the state within it.

In the above example we have initialized the state containing counter property with value 0. We have defined handleClick method with num parameter for updating state, inside handleClick method we have setState method for updating state value.

In class components, Binding the this context is necessary when you want to access the component's instance variables or call other methods within the component.

In this approach, the this.handleClick method is explicitly bound to the component's instance by using the bind() method within the constructor. Binding this ensures that it refers to the component instance when the method is invoked.

In the below example we are using arrow function , Arrow functions automatically bind the this context to the enclosing lexical scope, which is the component instance in this case. With arrow functions, there's no need to explicitly bind the method in the constructor.

In the above example we are passing state value and handleClick method to the Counter component, state value is rendered inside the render().

```javascript
//Counter.jsx

import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state={
            enable : false
        }
    }

    handleButtonClick = (num) => {
        this.props.handleClick(num);
    };

    render() {
        const {state} = this.props
        return (
            <div className='post center'>
                <h1>Counter</h1>
                <p>{state.counter}</p>
                <button onClick={()=>this.handleButtonClick(+1)}> + </button>
                <button onClick={()=>this.handleButtonClick(-1)}> - </button>
            </div>
        );
    }
}

export default Counter;
```