'use client';

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { Spin } from 'antd';
import { PATH_LOGIN } from "@/constants/routesConstants";

const withAuth = (Component: NextPage) => {

  const AuthComponent = () => {
    const [isAuth, setIsAuth] = useState(false);

    const router = useRouter();
    const isAuthenticated = true;

    useEffect(() => {
      const validateAuth = () => {
        if (!isAuthenticated) {
          router.push(PATH_LOGIN);
        } else {
          setIsAuth(true);
        }
      };

      validateAuth();
    }, [isAuthenticated, router]);

    return !!isAuth ?
      <Component /> :
      (
        <Spin
          fullscreen
          style={{
            background: "linear-gradient(#053B50,#176B87,#64CCC5)"
          }}
          size="large"
        />
      );
  };

  return AuthComponent;
};

export default withAuth;