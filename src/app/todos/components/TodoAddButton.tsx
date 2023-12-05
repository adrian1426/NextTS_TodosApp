import { FloatButton } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';

interface TodoAddButtonProps {
  showModal: () => void
}

const TodoAddButton = (props: TodoAddButtonProps) => {
  const { showModal } = props;

  return (
    <FloatButton
      onClick={showModal}
      icon={<AppstoreAddOutlined style={{ fontSize: "20px" }} />}
      type='primary'
      tooltip="Agregar una nueva tarea"
      style={{
        right: 15,
        bottom: 30,
        width: "50px",
        height: "50px"
      }}
    />
  );
};

export default TodoAddButton;