'use client';

import { useState } from 'react';
import { FloatButton, Modal, Input } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { TodoModel } from "@/models/todoModel";
import TodoCard from "./todo-card/TodoCard";

const { TextArea } = Input;

const todos: TodoModel[] = [
  {
    "createdAt": "01-12-2023",
    "finishedAt": "01-12-2023",
    "title": "Leer un libro",
    "description": "Leer libro de clean code para saber más de programación",
    "status": 2,
    "id": "1",
    "userId": "1"
  },
  {
    "createdAt": "01-12-2023",
    "finishedAt": "01-12-2023",
    "title": "salir a correr",
    "description": "Salir a correr para tener condicion fisica y ser el mejor jugador de esta galaxia entera, mejor que crsitiano",
    "status": 1,
    "id": "3",
    "userId": "1"
  },
  {
    "createdAt": "01-12-2023",
    "finishedAt": "01-12-2023",
    "title": "Pensar en una idea",
    "description": "Tengo que pensar una idea inovadora para conquistar el mundo",
    "status": 1,
    "id": "5",
    "userId": "1"
  }
]

const TodoList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap"
    }}
    >
      {
        todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))
      }

      <Modal
        title={<label style={{ color: "white" }}>Agregar tarea</label>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
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
            onChange={onChange}
          />

          <br />
          <br />

          <TextArea
            placeholder="Descripción de tarea"
            showCount
            maxLength={100}
            onChange={onChange}
          />
        </div>
      </Modal>

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
    </div>
  );
};

export default TodoList;