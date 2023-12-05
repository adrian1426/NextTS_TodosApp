import { useState, useEffect } from 'react';
import { Spin, Result, Button } from 'antd';
import TemplateForList from "@/ui/templates/TemplateForList";
import TodoHeader from "../components/todo-header/TodoHeader";
import TodoList from "../components/TodoList";
import useApi from "@/hooks/useApi";
import { useUserContext } from "@/context/userContext";
import { TodoModel } from '@/models/todoModel';

const TodosTemplate = () => {
  const userContext = useUserContext();
  const user: any = userContext.user;
  const urlApiTodos = `${process.env.NEXT_PUBLIC_TODO_API_PATH_V1}/users/${user.id}/todos`;
  const { data = [], isLoading, error, refetch } = useApi(urlApiTodos);
  const [todoFiltered, setTodoFiltered] = useState<TodoModel | any>([]);

  const filterTodos = (title: string, status: string) => {
    let filtered: TodoModel[] | any = [];

    if (status === "0" && title === "") {
      refetch();
      return;
    }

    if (status === "0" || status === "") {
      filtered = data?.filter((todo: TodoModel) => todo.title.toUpperCase().includes(title.toUpperCase()));
    } else {
      filtered = data?.filter((todo: TodoModel) => (todo.title.toUpperCase().includes(title.toUpperCase()) && todo.status === Number(status)));
    }

    setTodoFiltered(filtered);
  };

  useEffect(() => {
    setTodoFiltered(data);
  }, [data]);

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
        renderHeader={
          <TodoHeader
            filterTodos={filterTodos}
            renderProp={() => (
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "20%",
                  backgroundColor: "#053B50"
                }}
              >
                Buscar
              </Button>
            )}
          />
        }
      >
        <TodoList todos={todoFiltered} refetch={refetch} />
      </TemplateForList>
    </>
  );
};

export default TodosTemplate;