import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

interface MenuHorizontalProps {
  items: MenuProps['items']
}

const MenuHorizontal = (props: MenuHorizontalProps) => {
  const { items = [] } = props;

  const [current, setCurrent] = useState(items[1]?.key?.toString() || 'menutareas');

  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key !== "infoData") {
      setCurrent(e.key);
    }
  };

  return (
    <Menu
      style={{
        backgroundColor: "#053B50"
      }}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default MenuHorizontal;