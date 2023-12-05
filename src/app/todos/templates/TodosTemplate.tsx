import { Spin, Result } from 'antd';
import TemplateForList from "@/ui/templates/TemplateForList";
import TodoHeader from "../components/todo-header/TodoHeader";
import TodoList from "../components/TodoList";
import useApi from "@/hooks/useApi";
import { useUserContext } from "@/context/userContext";

const TodosTemplate = () => {
  const userContext = useUserContext();
  const user: any = userContext.user;
  const urlApiTodos = `${process.env.NEXT_PUBLIC_TODO_API_PATH_V1}/users/${user.id}/todos`;

  const { data = [], isLoading, error, refetch } = useApi(urlApiTodos);

  if (isLoading) {
    return <Spin fullscreen size='large' />;
  }

  if (error) {
    return (
      <Result
        status="error"
        title="Algo falló"
        subTitle="No pudimos obtener la información solicitada."
      />
    )
  }

  return (
    <>
      <TemplateForList
        renderHeader={<TodoHeader />}
      >
        <TodoList todos={data} refetch={refetch} />
      </TemplateForList>
    </>
  );
};

export default TodosTemplate;