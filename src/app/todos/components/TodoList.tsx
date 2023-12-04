import { TodoModel } from "@/models/todoModel";
import TodoCard from "./todo-card/TodoCard";

const todos: TodoModel[] = [
  {
    "createdAt": "01-12-2023",
    "finishedAt": "01-12-2023",
    "title": "Leer un libro",
    "description": "Leer libro de clean code para saber más de programación",
    "status": 2,
    "id": "1",
    "userId": "1"
  },
  {
    "createdAt": "01-12-2023",
    "finishedAt": "01-12-2023",
    "title": "salir a correr",
    "description": "Salir a correr para tener condicion fisica",
    "status": 1,
    "id": "3",
    "userId": "1"
  },
  {
    "createdAt": "01-12-2023",
    "finishedAt": "01-12-2023",
    "title": "Pensar en una idea",
    "description": "Tengo que pensar una idea inovadora para conquistar el mundo",
    "status": 1,
    "id": "5",
    "userId": "1"
  }
]

const TodoList = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap"
    }}
    >
      {
        todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))
      }
    </div>
  );
};

export default TodoList;