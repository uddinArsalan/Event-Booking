"use client";
import { createContext, useContext, useState } from "react";
import { Toaster } from "react-hot-toast";

interface AppInterface {
  isLoggedIn: boolean;
  setCurrentUserId: (userId: string) => void;
  currentUserId: string;
}

const AppContext = createContext<AppInterface>({
  isLoggedIn: false,
  setCurrentUserId: (userId) => {},
  currentUserId: "",
});

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

export default function AppProvider({ children }: React.PropsWithChildren) {
  const [userId, setUserId] = useState<string>("1");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const setCurrentUserId = (userId: string) => {
    setUserId(userId);
    setIsLoggedIn(true);
  };
  return (
    <AppContext.Provider
      value={{ currentUserId: userId, isLoggedIn, setCurrentUserId }}
    >
      {children}
      <Toaster position="bottom-center" />
    </AppContext.Provider>
  );
}
