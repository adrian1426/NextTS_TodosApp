import { UserOutlined } from '@ant-design/icons';

const LoginHeader = () => {
  return (
    <>
      <UserOutlined
        style={{
          color: "white",
          fontSize: "25px",
          marginRight: "10px"
        }}
      />
      <h3
        style={{
          color: "white"
        }}
      >
        Inicio de sesión
      </h3>
    </>
  );
};

export default LoginHeader;