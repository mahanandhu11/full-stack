import { useState } from "react";
import "./App.css";

function App() {

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([
    "Learn JavaScript",
    "Create Portfolio",
    "Finish Todo App",
    "Create Micro Blogging"
  ]);

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((item, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">

      <h1>My Todo List</h1>

      <div className="inputBox">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <h2>Tasks</h2>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button
              className="delete"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3>Total Tasks : {tasks.length}</h3>

    </div>
  );
}

export default App;