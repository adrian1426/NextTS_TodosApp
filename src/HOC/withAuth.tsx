'use client';

import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const PageWithAuth = (Component: NextPage) => {

  const AuthenticatedComponent = () => {
    const router = useRouter();

    const isAuthenticated = true;

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {

      const getUser = () => {
        if (!isAuthenticated) {
          router.push('/login');
        } else {
          setIsAuth(true)
        }
      };
      getUser();
    }, [isAuthenticated, router]);

    return !!isAuth ? <Component /> : null; // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};

export default PageWithAuth;