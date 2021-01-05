import React from "react";
const Todo = (props) => {


  return (
    <div>
      <h1>Todo</h1>
      <h2>{props.count}</h2>
      <p>{props.todo}</p>
      <button onClick={()=> props.callBackFunc('It is time to go Biking')}>Child-Parent</button>
    </div>
  );
};
export default Todo;
 