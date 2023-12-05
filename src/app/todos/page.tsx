'use client';

import TodosTemplate from "./templates/TodosTemplate";
import withAuth from "@/HOC/withAuth";

const TodosPage = () => {
  return (
    <TodosTemplate />
  );
};

export default withAuth(TodosPage);