'use client'

import { useState } from 'react';
import SelectOptions from '@/ui/SelectOptions';
import { FileSearchOutlined } from '@ant-design/icons';
import { Input, Form } from 'antd';
import styles from './TodoHeader.module.css';

const optionsEstatusTodo = [
  {
    value: '0',
    label: 'Todos',
  },
  {
    value: '1',
    label: 'En proceso',
  },
  {
    value: '2',
    label: 'Completados',
  }
];

interface TodoHeaderProps {
  filterTodos: (title: string, status: string) => void,
  renderProp: () => React.ReactElement
}

const TodoHeader = (props: TodoHeaderProps) => {
  const { filterTodos, renderProp } = props;
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const onChangeSelect = (value: string) => {
    setStatus(value)
  };

  const onFinishSearch = () => {
    filterTodos(title, status);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        ¡Administra tus tareas, no olvides completarlas!
      </h3>

      <Form
        className={styles.form}
        onFinish={onFinishSearch}
      >
        <Input
          placeholder="Titulo de la tarea"
          prefix={<FileSearchOutlined />}
          style={{ width: "30%" }}
          onChange={onChangeInput}
        />

        <SelectOptions
          placeholder='Estado de la tarea'
          options={optionsEstatusTodo}
          onChange={onChangeSelect}
        />

        {renderProp()}

      </Form>
    </div >
  );
};

export default TodoHeader;