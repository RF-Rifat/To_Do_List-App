import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function List() {
  const [todoList, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Input Your Task");
      return;
    }
    
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    
    const newTodoList = [...todoList, task];
    setTodo(newTodoList);
    setNewTask("");
  };
  
  const deleteTask = (id) => {
    setTodo(todoList.filter((task) =>  task.id !== id));
  };
  
  const onChange = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <div>
      <div className="addTask d-flex justify-content-evenly align-items-center mb-3">
        <div className="form-floating mb-3 w-75">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Add Your Task"
            onChange={onChange}
          />
          <label htmlFor="floatingInput">Add Your Task</label>
        </div>
        <div>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={addTask}
        >
          Add
        </button>
        </div>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
              key={task.taskName}
            >
              <strong>{task.taskName}</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={()=>deleteTask(task.id)}
              ></button>
            </div>
    
          );
        })}
      </div>
    </div>
  );
}

export default List;
