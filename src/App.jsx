import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  let [todoListItem, setTodoListItem] = useState([]);

  const onNewItemAdd = (itemName, itemDueDate) => {
    const newListItem = { name: itemName, dueDate: itemDueDate };
    setTodoListItem([...todoListItem, newListItem]);
  };

  const onDeleteItem = (todoItemName) => {
    const newTodoItems = todoListItem.filter(
      (item) => item.name !== todoItemName
    );
    setTodoListItem(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItemAdd={onNewItemAdd} />
      {todoListItem.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItems={todoListItem}
        onDeleteClick={onDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
