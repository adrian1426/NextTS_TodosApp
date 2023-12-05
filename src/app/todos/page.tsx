'use client';

import TemplateForList from "@/ui/templates/TemplateForList";
import TodoHeader from "./components/todo-header/TodoHeader";
import TodoList from "./components/TodoList";
import withAuth from "@/HOC/withAuth";

const TodosPage = () => {
  return (
    <>
      <TemplateForList
        renderHeader={<TodoHeader />}
      >
        <TodoList />
      </TemplateForList>
    </>
  );
};

export default withAuth(TodosPage);