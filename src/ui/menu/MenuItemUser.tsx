import { useRouter } from "next/navigation";
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { AUTH_USER_LOCAL_STORAGE } from '@/constants/appConstants';
import { PATH_LOGIN } from "@/constants/routesConstants";

interface MenuItemUserProps {
  name?: string
}

const MenuItemUser = (props: MenuItemUserProps) => {
  const { name } = props;
  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem(AUTH_USER_LOCAL_STORAGE);
    router.push(PATH_LOGIN);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <><LogoutOutlined /> Cerrar sesión</>,
      onClick: logout
    }
  ];

  return (
    <Dropdown menu={{ items }}>
      <div style={{ color: 'white' }}>
        <label
          style={{ marginRight: "10px" }}
        >
          {name}
        </label>

        <UserOutlined
          style={{
            fontSize: "18px",
            fontWeight: "bold"
          }}
        />
      </div>
    </Dropdown>
  );
};

export default MenuItemUser;