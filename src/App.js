import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo";

const App = () => {
  const [todo, setTodo] = useState("Let's go Hiking");
  const [count, setCount] = useState(0);
  const [fname, setFname] = useState("Paulos");
  const [lname, setLnme] = useState("Gudu");

  const callBack = (valueFromChild) => {
    setTodo(valueFromChild);
  };

  useEffect(() => {
    document.title = fname + " " + lname;
  });

  const increment = () => {
    if (count === 4) {
      throw new Error("Crashed");
    }
    setCount((prevState) => prevState + 1);
  };

  const handleFname = (e) => {
    e.preventDefault();
    setFname(e.target.value);
  };
  const handleLname = (e) => {
    e.preventDefault();
    setLnme(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
      <h1>My React App</h1>
      <label>First Name</label> <br />
      <input type="text" value={fname} onChange={handleFname} />
      <br/>
      <br/>
      <label>Last Name</label> <br />
      <input type="text" value={lname} onChange={handleLname} />
      <Todo todo={todo} count={count} callBackFunc={callBack} />
      <button onClick={increment}>Increment</button>
    </div>
    </div>
  );
};
export default App;
