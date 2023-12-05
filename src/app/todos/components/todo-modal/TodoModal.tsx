import React from 'react';
import { Modal } from 'antd';

interface TodoModalProps {
  children: React.ReactNode,
  isModalOpen: boolean,
  handleModalOk: () => void,
  handleModalCancel: () => void,
  title: string
}

const TodoModal = (props: TodoModalProps) => {
  const { children, isModalOpen, handleModalOk, handleModalCancel, title } = props;

  return (
    <Modal
      title={<label style={{ color: "white" }}>{title}</label>}
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
      {children}
    </Modal >
  );
};

export default TodoModal;