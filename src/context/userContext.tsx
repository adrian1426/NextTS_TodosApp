'use client';

import { useState, createContext, ReactNode, useMemo, useContext } from 'react';
import { userModel } from '@/models/userModel';

export const UserContext = createContext({
  user: {},
  addUser: (data: userModel) => { }
});

export default function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({});

  const addUser = (data: userModel) => {
    setUser(data);
  }

  const value = useMemo(() => (
    {
      user,
      addUser
    }
  ), [user]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}