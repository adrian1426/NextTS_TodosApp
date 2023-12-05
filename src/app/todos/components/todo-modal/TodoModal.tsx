import { Modal, Input } from 'antd';

const { TextArea } = Input;

interface TodoModalProps {
  isModalOpen: boolean,
  setIsModalOpen: Function
}

const TodoModal = (props: TodoModalProps) => {
  const { isModalOpen, setIsModalOpen } = props;

  const handleModalOk = () => {
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };

  return (
    <Modal
      title={<label style={{ color: "white" }}>Agregar tarea</label>}
      open={isModalOpen}
      onOk={handleModalOk}
      onCancel={handleModalCancel}
      closeIcon={null}
      okText="Aceptar"
      cancelText="Cancelar"
      okButtonProps={{
        style: {
          backgroundColor: "#053B50"
        }
      }}
      cancelButtonProps={{
        style: {
          backgroundColor: "#D2DBDB"
        }
      }}
      styles={{
        header: {
          backgroundColor: "#053B50",
          padding: "5px 10px"
        },
        content: {
          padding: 0,
          backgroundColor: "#EDF6F5",
        },
        footer: {
          padding: "10px 20px"
        }
      }}
    >
      <div
        style={{
          padding: "5px 20px"
        }}
      >
        <Input
          placeholder='Titulo de tarea'
          showCount
          maxLength={25}
          onChange={onChangeInput}
        />

        <br />
        <br />

        <TextArea
          placeholder="Descripción de tarea"
          showCount
          maxLength={100}
          onChange={onChangeInput}
        />
      </div>
    </Modal>
  );
};

export default TodoModal;