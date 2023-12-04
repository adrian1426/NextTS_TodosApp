'use client'

import { Card } from 'antd';
import TodoCardTitle from './TodoCardTitle';
import TodoCardContent from './TodoCardContent';
import TodoCardActions from './TodoCardActions';
import { TodoModel } from '@/models/todoModel';

interface TodoCardProps {
  todo: TodoModel
}

const TodoCard = (props: TodoCardProps) => {
  const { todo } = props;

  const todoDate = todo.status === 1 ? todo.createdAt : todo.finishedAt;

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

      <TodoCardActions idStatusTodo={todo.status} />
    </Card >
  );
};

export default TodoCard;