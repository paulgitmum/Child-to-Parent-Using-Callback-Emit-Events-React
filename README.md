# Child-to-Parent-Using-Callback-Emit-Events-React

# How to pass data between react components?
### Parent Component to Child Component (using props)
With the help of props, we can send data from a parent to a child component.

### Child Component to Parent Component (using callbacks)
This one is a bit tricky. We follow the steps below:

* Create a callback in the parent component which takes in the data needed as a parameter.
* Pass this callback as a prop to the child component.
* Send data from the child component using the callback.