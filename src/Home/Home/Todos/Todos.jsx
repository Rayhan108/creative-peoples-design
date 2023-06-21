import axios from "axios";
import { useEffect, useState } from "react";
import TodosCard from "./TodosCard";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-5xl font-extrabold text-center mt-12 mb-12">
        Todos List
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
        {todos.map((todo) => (
          <TodosCard key={todo.id} todo={todo}></TodosCard>
        ))}
      </div>
    </>
  );
};

export default Todos;
