'use client';

import type { MenuProps } from 'antd';
import { FileDoneOutlined } from '@ant-design/icons';
import AppLogo from "@/ui/AppLogo";
import MenuHorizontal from "@/ui/menu/MenuHorizontal";
import MenuItemLink from "@/ui/menu/MenuItemLink";
import MenuItemUser from "@/ui/menu/MenuItemUser";

export default function TodosLayout({ children }: { children: React.ReactNode }) {

  const items: MenuProps['items'] = [
    {
      label: <AppLogo title='TodoApp' />,
      key: 'todoApp',
      disabled: true
    },
    {
      label: (<MenuItemLink href="/todos" icon={<FileDoneOutlined />} label='Lista de tareas' />),
      key: 'menutareas'
    },
    {
      label: (<MenuItemUser name='Adrian Hernandez' />),
      key: 'infoData',
      style: {
        position: "absolute",
        right: 1
      }
    }
  ];

  return (
    <>
      <MenuHorizontal items={items} />
      <div
        style={{
          height: "calc(100vh - 46px)",
          backgroundColor: "#EEEEEE",
          padding: "1% 2%"
        }}
      >
        {children}
      </div>
    </>
  )
}