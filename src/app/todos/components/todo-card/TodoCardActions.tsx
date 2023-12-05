import { FloatButton, Button, Popconfirm } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface TodoCardActionsProps {
  idStatusTodo: number,
  handleDeleteTodoById: () => void
}

const TodoCardActions = (props: TodoCardActionsProps) => {
  const { idStatusTodo, handleDeleteTodoById } = props;

  const textButton = idStatusTodo === 1 ? "Completar tarea" : "Reiniciar tarea";
  const colorButton = idStatusTodo === 1 ? "#64CCC5" : "#D2DBDB";

  return (
    <div>
      <Button
        type="primary"
        style={{
          width: "90%",
          backgroundColor: colorButton
        }}
      >
        {textButton}
      </Button>

      <FloatButton.Group
        trigger="click"
        style={{
          position: "absolute",
          right: 4,
          bottom: 21
        }}
        icon={<MoreOutlined />}
      >
        <Popconfirm
          title="Eliminar tarea"
          description="¿Estás seguro de eliminar la tarea?"
          okText="Si"
          cancelText="No"
          onConfirm={handleDeleteTodoById}
        >
          <FloatButton
            icon={<DeleteOutlined />}
          />
        </Popconfirm>
        <FloatButton
          icon={<EditOutlined />}
        />
      </FloatButton.Group>
    </div >
  );
};

export default TodoCardActions;