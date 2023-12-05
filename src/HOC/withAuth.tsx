'use client';

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { Spin } from 'antd';
import { PATH_LOGIN } from "@/constants/routesConstants";
import { AUTH_USER_LOCAL_STORAGE } from "@/constants/appConstants";

const withAuth = (Component: NextPage) => {

  const AuthComponent = () => {
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();

    let dataUserLocal = "{}";

    if (typeof window !== "undefined") {
      dataUserLocal = window.localStorage.getItem(AUTH_USER_LOCAL_STORAGE) || "{}";
    }

    const isAuthenticated = JSON.parse(dataUserLocal)?.isAuth === 1;

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