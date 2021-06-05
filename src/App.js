import "./App.css";
import Todolist from "./components/Todolist";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }

  const onDelete = (todo) => {
    setTodotasks(
      todotasks.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todo", JSON.stringify(todotasks));
  };

  const addTodo = (task) => {
    let id;
    if (todotasks.length === 0) {
      id = 0;
    } else {
      id = todotasks[todotasks.length - 1].id + 1;
    }
    const myTasks = {
      id: id,
      title: task,
      completed: false,
    };
    setTodotasks([...todotasks, myTasks]);
    console.log(myTasks);
  };

 const strikeUnstrike = (todo) => {
            todo.completed = !todo.completed

            console.log("TASK:", todo.completed);
  };

  const [todotasks, setTodotasks] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todotasks));
  }, [todotasks]);

  return (
    <Todolist todolist={todotasks} onDelete={onDelete} addTodo={addTodo} strikeUnstrike={strikeUnstrike}  />
  );
}

export default App;
