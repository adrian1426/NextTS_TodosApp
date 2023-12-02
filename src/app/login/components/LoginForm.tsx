import { Form, Button, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const LoginForm = () => {

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '¡Por favor introduce tu usuario!' }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Usuario"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: '¡Por favor introduce tu contraseña!' }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Contraseña"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "100%",
            backgroundColor: "#64CCC5"
          }}
        >
          Iniciar sesión
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;