import TemplateForList from "@/ui/templates/TemplateForList";
import TodoHeader from "./components/TodoHeader";

const TodosPage = () => {
  return (
    <>
      <TemplateForList
        renderHeader={<TodoHeader />}
      >
        <h2>Tabla</h2>
      </TemplateForList>
    </>
  );
};

export default TodosPage;