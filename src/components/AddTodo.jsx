import { useState } from "react";
import { MdOutlineAddTask } from "react-icons/md";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItemAdd }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddBtnClick = () => {
    onNewItemAdd(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            className={styles.todoInput}
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.todoInput}
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddBtnClick}
          >
            <MdOutlineAddTask />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
