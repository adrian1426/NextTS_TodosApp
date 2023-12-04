import TemplateForList from "@/ui/templates/TemplateForList";
import TodoHeader from "./components/todo-header/TodoHeader";
import TodoList from "./components/TodoList";

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

export default TodosPage;