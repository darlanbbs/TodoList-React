import React from "react";
import { useState } from "react";
import { Card } from "./Card";

const Todo = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);
  const [id, setId] = useState(0);
  const addUser = () => {
    if (name === "") {
      return;
    } else {
      const users = {
        user: name,
        id: id,
      };
      setUser((prevState) => [...prevState, users]);
    }
    setName("");
    setId(id + 1);
  };

  const removeAllTask = (index) => {
    let reducedTodo = [...user];
    reducedTodo.splice(index);
    setUser(reducedTodo);
  };
  const removeTask = (index) => {
    let reducedTodo = [...user];
    reducedTodo.splice(index, 1);
    setUser(reducedTodo);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="container">
          <div className="allItems">
            <h1>Todo List</h1>
            <input
              type="text"
              placeholder="Digite uma tarefa..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={addUser}>Adicione uma tarefa</button>
            {user.length > 0 && (
              <button onClick={removeAllTask}>Remover tudo</button>
            )}
          </div>
          {user.map((person) => (
            <Card
              nick={person.user}
              id={id}
              key={person.id}
              removeTask={removeTask}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Todo;
