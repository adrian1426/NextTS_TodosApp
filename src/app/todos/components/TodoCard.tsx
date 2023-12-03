'use client'

import { Card, Badge, FloatButton, Button } from 'antd';
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const TodoCard = () => {
  return (
    <Card
      headStyle={{
        backgroundColor: "#176B87",
        color: "white",
        padding: "0 5px"
      }}
      bodyStyle={{
        backgroundColor: "#EDF6F5"
      }}
      title={
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5px"
        }}>
          <span>Leer un libro</span>
          <Badge
            style={{ backgroundColor: '#00A6FF', borderColor: "#00A6FF" }}
            count="En proceso"
          />
        </div>
      }
      style={{ width: 300, border: "1px solid #66c8fc" }}
    >
      <h3>
        Leer un libro de clean code , para yo ser un gran programador shshshshshshshshshshshshshshs
      </h3>
      <br />
      <h4>Fecha de inicio: 12-12-2013</h4>
      <br />

      <div>

        <Button
          type="primary"
          style={{
            width: "90%",
            backgroundColor: "#64CCC5"
          }}
        >
          Completar tarea
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
          <FloatButton icon={<DeleteOutlined />} />
          <FloatButton icon={<EditOutlined />} />
        </FloatButton.Group>
      </div >
    </Card >
  );
};

export default TodoCard;