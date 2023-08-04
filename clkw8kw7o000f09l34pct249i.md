---
title: "Class Component Lifecycle methods in React"
seoTitle: "Class Component Lifecycle methods in React"
datePublished: Fri Aug 04 2023 07:00:22 GMT+0000 (Coordinated Universal Time)
cuid: clkw8kw7o000f09l34pct249i
slug: class-component-lifecycle-methods-in-react
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1691132391599/413febf9-ac28-4a6c-82c9-72e68b125e96.png
tags: javascript

---

Please refer the previous post for [React class component](https://dev.to/indracit/react-class-component-basics-f80)

In React class components, there are several lifecycle methods that allow you to perform certain actions at specific points in the component's lifecycle. Here is an overview of the commonly used lifecycle methods in React class components:

## 1\. `componentDidMount()`:

This method is called after the component is mounted (inserted into the DOM tree). It is commonly used for performing side effects like fetching data from an API or subscribing to events. It runs only once during the component's lifecycle.

```javascript

constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
        this.setState({ data: data });
        })
        .catch(error => {
        console.log('Error fetching data:', error);
        });
    }
```

## 2\. `componentDidUpdate(prevProps, prevState)`:

This method is called when the component's props or state have changed. It receives the previous props and state as arguments and allows you to compare them with the current values. It is useful for updating the component based on changes and performing side effects when specific conditions are met.

```javascript

constructor(props){
    super(props);
    this.state={
      counter:0
    }}

componentDidUpdate (prevProps, prevState) {
      console.log(prevState.counter)
      if(this.state.counter === 0){
        alert("Reached Zero")
      }
    }
```

## 3\. `componentWillUnmount()`:

This method is called right before the component is unmounted and removed from the DOM. It is used to clean up any resources or subscriptions created in the `componentDidMount()` method to prevent memory leaks.

```javascript

constructor(props){
        super(props)
        this.state = {
            tick : 0
        }
    }
    timerId = null;

    componentDidMount(){
        this.timerId = setInterval(()=>this.setState((prevstate)=>({tick: prevstate.tick+1})), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }
```

## 4\. `shouldComponentUpdate(nextProps, nextState)`:

This method is called before the component is updated (re-rendered) and allows you to control whether the component should update or not. By default, it returns `true`, but you can implement custom logic to optimize performance by comparing the current props and state with the next props and state.

```javascript
constructor(props){
    super(props);
    this.state={
      counter:0
    }

shouldComponentUpdate(nextProps, nextState) {
      if (nextState.counter  < 0) {
        return false;
      }
      return true;
    }
```

## 5\. `static getDerivedStateFromProps(props, state)`:

This static method is invoked before rendering and can be used to update the state based on changes in the props. It should return an object to update the state or `null` to indicate no changes are needed. Note that it is often recommended to use `componentDidUpdate()` instead of this method.

```javascript

constructor(props) {
        super(props)
        this.state={
            enable : false
        }
    }

    static getDerivedStateFromProps(nextProps,nextState) {

        console.log(nextProps);
        if(nextProps.state.counter === 0){

            return {
                enable : true
            }
        }
        
        return {
            enable : false
        }
    }
```

These are some of the most commonly used lifecycle methods in React class components. However, please note that with the introduction of React Hooks, functional components and the `useEffect()` hook have become the preferred way of managing component lifecycle and side effects in modern React applications.

Please find the [GitHub Repo](https://github.com/indracit/class-component-tutorial.git) for reference.