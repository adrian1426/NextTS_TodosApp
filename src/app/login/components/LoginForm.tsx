import { Form, Button, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from "next/navigation";
import useApi from '@/hooks/useApi';
import { userModel } from '@/models/userModel';
import { AUTH_USER_LOCAL_STORAGE } from '@/constants/appConstants';
import { PATH_TODOS } from '@/constants/routesConstants';

const urlApiUsers = `${process.env.NEXT_PUBLIC_TODO_API_PATH_V1}/users`;

type UserLogin = {
  username: string,
  password: string
}

const LoginForm = () => {
  const { data } = useApi(urlApiUsers);
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  const onFinish = (values: UserLogin) => {
    const users = data || [];
    const { username, password } = values;

    const findUser = users.filter((user: userModel) => user.userName === username && user.password === password);

    if (findUser.length > 0) {
      const dataStorage = { isAuth: 1, userLogged: findUser[0] };
      localStorage.setItem(AUTH_USER_LOCAL_STORAGE, JSON.stringify(dataStorage));

      router.push(PATH_TODOS);
    } else {
      messageApi.open({
        type: 'error',
        content: 'Usuario y contraseña son incorrectos, valide su información',
      });
    }
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

      {contextHolder}
    </Form>
  );
};

export default LoginForm;