"use client";

import { createContext, useCallback, useMemo, useState } from "react";
import { getCookies, removeCookie } from "typescript-cookie";

import { IUser } from "@/models/user.model";

export interface AuthContextType {
  isLoggedIn: boolean;
  user: IUser | null;
  login: (user: IUser) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

function removeAllCookies() {
  const allCookies = getCookies();

  for (const cookieName in allCookies) {
    if (allCookies.hasOwnProperty(cookieName)) {
      removeCookie(cookieName);
    }
  }
}

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const login = useCallback((user: IUser) => {
    setIsLoggedIn(true);
    setUser(user);
  }, []);


  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUser(null);
    removeAllCookies()
    window.location.href = "/signin"
  }, []);


  const contextValues = useMemo(() => ({
    user,
    isLoggedIn,
    login,
    logout,
  }), [isLoggedIn, login, logout, user])

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}
