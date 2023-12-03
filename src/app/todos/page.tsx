import TemplateForList from "@/ui/templates/TemplateForList";
import TodoHeader from "./components/TodoHeader";
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