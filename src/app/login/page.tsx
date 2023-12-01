'use client';

import { Form, Button, Input } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
};

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const LoginPage = () => {

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Usuario"
        name="username"
        rules={[{ required: true, message: '¡Por favor introduce tu usuario!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: '¡Por favor introduce tu contraseña!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;