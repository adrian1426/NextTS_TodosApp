import { useState } from 'react';
import { Input } from 'antd';
import useApi from '@/hooks/useApi';
import { useUserContext } from '@/context/userContext';
import { TodoModalFormProps, dataForm, errorForm } from './TodoModalModels';
import TodoModal from './TodoModal';

const { TextArea } = Input;

const initialDataForm: dataForm = { title: '', description: '' };
const initialErrorForm: errorForm = { title: false, description: false };

const TodoModalForm = (props: TodoModalFormProps) => {
  const { isModalOpen, setIsModalOpen, refetchTodos } = props;
  const [dataForm, setDataForm] = useState<dataForm>(initialDataForm);
  const [dataFormError, setDataFormError] = useState<errorForm>(initialErrorForm);
  const userContext = useUserContext();

  const user: any = userContext.user;
  const urlApiTodos = `${process.env.NEXT_PUBLIC_TODO_API_PATH_V1}/users/${user.id}/todos`;

  const objectDate = new Date();

  const bodyTodo: any = {
    userId: user.id,
    title: dataForm.title,
    description: dataForm.description,
    status: 1,
    createdAt: `${objectDate.getDate()}-${objectDate.getMonth() + 1}-${objectDate.getFullYear()}`,
    finishedAt: ""
  };

  const { refetch: postTodo } = useApi(
    urlApiTodos,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyTodo)
    });


  const handleModalOk = () => {
    if (dataForm.title.length === 0 || dataForm.description.length === 0) {
      setDataFormError({
        title: dataForm.title.length === 0,
        description: dataForm.description.length === 0
      });
      return;
    }

    postTodo(refetchTodos);
    handleModalCancel();
  };

  const handleModalCancel = () => {
    setDataForm(initialDataForm);
    setDataFormError(initialErrorForm);
    setIsModalOpen(false);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <TodoModal
      handleModalCancel={handleModalCancel}
      handleModalOk={handleModalOk}
      isModalOpen={isModalOpen}
      title='Agregar tarea'
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
          value={dataForm.title}
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
          value={dataForm.description}
        />
      </div>
    </TodoModal>
  );
};

export default TodoModalForm;