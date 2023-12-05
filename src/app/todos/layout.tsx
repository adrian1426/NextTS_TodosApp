'use client';

import { useCallback, useEffect, useRef } from 'react';
import type { MenuProps } from 'antd';
import { message } from 'antd';
import { FileDoneOutlined } from '@ant-design/icons';
import AppLogo from "@/ui/AppLogo";
import MenuHorizontal from "@/ui/menu/MenuHorizontal";
import MenuItemLink from "@/ui/menu/MenuItemLink";
import MenuItemUser from "@/ui/menu/MenuItemUser";
import { useUserContext } from '@/context/userContext';

export default function TodosLayout({ children }: { children: React.ReactNode }) {
  const [messageApi, contextHolder] = message.useMessage();
  const userContext = useUserContext();
  const showWelcomeMessageRef = useRef<Boolean>(true);

  const user: any = userContext.user;

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
      label: (<MenuItemUser name={user?.name} />),
      key: 'infoData',
      style: {
        position: "absolute",
        right: 1
      }
    }
  ];

  const infoWelcome = useCallback(() => {
    messageApi.info(`Bienvenido ${user.name} a la aplicación de tareas.`);
  }, [user.name, messageApi]);

  useEffect(() => {
    if (showWelcomeMessageRef.current && user.name) {
      infoWelcome();
      showWelcomeMessageRef.current = false;
    }
  }, [infoWelcome, user.name]);

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
      {contextHolder}
    </>
  )
}