'use client';

import { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { TodoModel } from "@/models/todoModel";
import TodoCard from "./todo-card/TodoCard";
import TodoModal from './todo-modal/TodoModal';
import TodoAddButton from './TodoAddButton';

interface TodoListProps {
  todos: TodoModel[] | any
}

const TodoList = (props: TodoListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { todos } = props;

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
        todos.map((todo: TodoModel) => (
          <TodoCard key={todo.id} todo={todo} />
        ))
      }

      {
        todos.length <= 0 && (
          <Result
            icon={<SmileOutlined />}
            title="No se encontraron tareas, ¿Deseas agregar uno?"
            extra={<Button onClick={showModal} type="primary">Agregar</Button>}
          />
        )
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