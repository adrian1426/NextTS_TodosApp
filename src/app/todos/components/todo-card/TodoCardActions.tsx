import { FloatButton, Button } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface TodoCardActionsProps {
  idStatusTodo: number
}

const TodoCardActions = (props: TodoCardActionsProps) => {
  const { idStatusTodo } = props;

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
        <FloatButton
          icon={<DeleteOutlined />}
        />
        <FloatButton
          icon={<EditOutlined />}
        />
      </FloatButton.Group>
    </div >
  );
};

export default TodoCardActions;