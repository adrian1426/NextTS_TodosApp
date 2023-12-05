'use client';

import { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { TodoModel } from "@/models/todoModel";
import TodoCard from "./todo-card/TodoCard";
import TodoModalForm from './todo-modal/TodoModalForm';
import TodoAddButton from './TodoAddButton';

interface TodoListProps {
  todos: TodoModel[] | any,
  refetch: Function
}

const TodoList = (props: TodoListProps) => {
  const { todos, refetch } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoEdit, setTodoEdit] = useState<TodoModel | any>({});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleEditTodo = (todo: TodoModel) => {
    setTodoEdit(todo);
    setIsModalOpen(true);
  };

  const resetTodoEdit = () => {
    setTodoEdit({});
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
          <TodoCard
            key={todo.id}
            todo={todo}
            refetchTodos={refetch}
            handleEditTodo={handleEditTodo}
          />
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

      <TodoModalForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        refetchTodos={refetch}
        todoEdit={todoEdit}
        resetTodoEdit={resetTodoEdit}
      />

      <TodoAddButton showModal={showModal} />
    </div>
  );
};

export default TodoList;