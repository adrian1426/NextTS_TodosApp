'use client';

import { useState } from 'react';
import { TodoModel } from "@/models/todoModel";
import TodoCard from "./todo-card/TodoCard";
import TodoModal from './todo-modal/TodoModal';
import TodoAddButton from './TodoAddButton';

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
    "description": "Salir a correr para tener condicion fisica y ser el mejor jugador de esta galaxia entera, mejor que crsitiano",
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      style={{
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

      <TodoModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <TodoAddButton showModal={showModal} />
    </div>
  );
};

export default TodoList;