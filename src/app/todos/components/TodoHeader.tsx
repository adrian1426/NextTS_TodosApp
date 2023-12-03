'use client'

import SelectOptions from '@/ui/SelectOptions';
import { FileSearchOutlined } from '@ant-design/icons';
import { Input, Button, Form } from 'antd';
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
]

const TodoHeader = () => {

  const onChangeSelect = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        ¡Administra tus tareas, no olvides completarlas!
      </h3>

      <Form
        className={styles.form}
        onFinish={() => console.log("buscar")}
      >
        <Input
          placeholder="Titulo de la tarea"
          prefix={<FileSearchOutlined />}
          style={{ width: "30%" }}
        />

        <SelectOptions
          placeholder='Estado de la tarea'
          options={optionsEstatusTodo}
          onChange={onChangeSelect}
        />

        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "20%",
            backgroundColor: "#176B87"
          }}
        >
          Buscar
        </Button>

      </Form>
    </div >
  );
};

export default TodoHeader;