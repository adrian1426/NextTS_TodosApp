import { FloatButton, Button, Popconfirm } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface TodoCardActionsProps {
  idStatusTodo: number,
  handleDeleteTodoById: () => void,
  handleUpdateTodoById: () => void,
  handleEditTodo: () => void
}

const TodoCardActions = (props: TodoCardActionsProps) => {
  const { idStatusTodo, handleDeleteTodoById, handleUpdateTodoById, handleEditTodo } = props;

  const textButton = idStatusTodo === 1 ? "Completar tarea" : "Reiniciar tarea";
  const colorButton = idStatusTodo === 1 ? "#64CCC5" : "#D2DBDB";

  return (
    <div>
      <Popconfirm
        title={textButton}
        description={`¿Deseas ${textButton}?`}
        okText="Si"
        cancelText="No"
        onConfirm={handleUpdateTodoById}
      >
        <Button
          type="primary"
          style={{
            width: "90%",
            backgroundColor: colorButton
          }}
        >
          {textButton}
        </Button>
      </Popconfirm>

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
          onClick={handleEditTodo}
        />
      </FloatButton.Group>
    </div >
  );
};

export default TodoCardActions;