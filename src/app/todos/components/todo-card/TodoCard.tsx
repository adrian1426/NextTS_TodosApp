'use client'

import { Card } from 'antd';
import TodoCardTitle from './TodoCardTitle';
import TodoCardContent from './TodoCardContent';
import TodoCardActions from './TodoCardActions';
import { TodoModel } from '@/models/todoModel';
import useApi from '@/hooks/useApi';
import { useUserContext } from '@/context/userContext';

interface TodoCardProps {
  todo: TodoModel,
  refetchTodos: Function
}

const TodoCard = (props: TodoCardProps) => {
  const { todo, refetchTodos } = props;
  const userContext = useUserContext();
  const user: any = userContext.user;
  const urlApiTodos = `${process.env.NEXT_PUBLIC_TODO_API_PATH_V1}/users/${user.id}/todos/${todo.id}`;
  const { refetch: deleteTodoById } = useApi(urlApiTodos, { method: 'DELETE' });

  const todoDate = todo.status === 1 ? todo.createdAt : todo.finishedAt;

  const handleDeleteTodoById = () => {
    deleteTodoById(refetchTodos);
  };

  return (
    <Card
      headStyle={{
        backgroundColor: "#176B87",
        color: "white",
        padding: "0 5px"
      }}
      bodyStyle={{
        backgroundColor: "#EDF6F5",
        height: "230px"
      }}
      title={<TodoCardTitle title={todo.title} idStatusTodo={todo.status} />}
      style={{ width: 300, margin: "5px 0" }}
    >

      <TodoCardContent
        description={todo.description}
        idStatusTodo={todo.status}
        date={todoDate}
      />

      <TodoCardActions
        idStatusTodo={todo.status}
        handleDeleteTodoById={handleDeleteTodoById}
      />
    </Card >
  );
};

export default TodoCard;