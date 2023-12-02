import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

interface MenuItemUserProps {
  name?: string
}

const MenuItemUser = (props: MenuItemUserProps) => {
  const { name } = props;

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <><LogoutOutlined /> Cerrar sesión</>,
      onClick: () => console.log("Salgamos")
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