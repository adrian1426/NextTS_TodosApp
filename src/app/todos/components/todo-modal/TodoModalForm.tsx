import { useState, useEffect } from 'react';
import { Input } from 'antd';
import useApi from '@/hooks/useApi';
import { useUserContext } from '@/context/userContext';
import { TodoModalFormProps, dataForm, errorForm } from './TodoModalModels';
import TodoModal from './TodoModal';

const { TextArea } = Input;

const initialDataForm: dataForm = { title: '', description: '' };
const initialErrorForm: errorForm = { title: false, description: false };

const TodoModalForm = (props: TodoModalFormProps) => {
  const { isModalOpen, setIsModalOpen, refetchTodos, todoEdit, resetTodoEdit } = props;
  const [dataForm, setDataForm] = useState<dataForm>(initialDataForm);
  const [dataFormError, setDataFormError] = useState<errorForm>(initialErrorForm);
  const userContext = useUserContext();

  const user: any = userContext.user;
  const updOrPostPath = todoEdit?.id ? `/${todoEdit.id}` : "";
  const urlApiTodos = `${process.env.NEXT_PUBLIC_TODO_API_PATH_V1}/users/${user.id}/todos${updOrPostPath}`;

  const objectDate = new Date();
  const dateFormat = `${objectDate.getDate()}-${objectDate.getMonth() + 1}-${objectDate.getFullYear()}`;

  const bodyTodo: any = {
    userId: user.id,
    title: dataForm.title,
    description: dataForm.description,
    status: todoEdit?.status ? todoEdit.status : 1,
    createdAt: todoEdit?.createdAt ? todoEdit.createdAt : dateFormat,
    finishedAt: todoEdit?.finishedAt ? todoEdit.finishedAt : dateFormat
  };

  const { refetch: postUpdTodo } = useApi(
    urlApiTodos,
    {
      method: todoEdit?.id ? "PUT" : 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyTodo)
    });


  const handleModalOk = () => {
    const validationTitle = dataForm.title === undefined || dataForm.title?.trim().length === 0;
    const validationDescription = dataForm.description === undefined || dataForm.description?.trim().length === 0;

    if (validationTitle || validationDescription) {
      setDataFormError({
        title: validationTitle,
        description: validationDescription
      });
      return;
    }

    postUpdTodo(refetchTodos);
    handleModalCancel();
  };

  const handleModalCancel = () => {
    setDataForm(initialDataForm);
    setDataFormError(initialErrorForm);
    resetTodoEdit();
    setIsModalOpen(false);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    setDataForm(todoEdit)
  }, [todoEdit]);

  return (
    <TodoModal
      handleModalCancel={handleModalCancel}
      handleModalOk={handleModalOk}
      isModalOpen={isModalOpen}
      title={todoEdit?.id ? "Editar tarea" : "Agregar tarea"}
    >
      <div
        style={{
          padding: "5px 20px"
        }}
      >
        <Input
          placeholder='Titulo de tarea'
          status={dataFormError.title ? 'error' : ''}
          showCount
          maxLength={25}
          name="title"
          onChange={onChangeInput}
          value={dataForm?.title}
        />

        <br />
        <br />

        <TextArea
          placeholder="Descripción de tarea"
          status={dataFormError.description ? 'error' : ''}
          showCount
          maxLength={100}
          name="description"
          onChange={onChangeInput}
          value={dataForm?.description}
        />
      </div>
    </TodoModal>
  );
};

export default TodoModalForm;