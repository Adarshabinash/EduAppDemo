import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const raw = await AsyncStorage.getItem("user");
      if (raw) setUser(JSON.parse(raw));
      setLoading(false);
    })();
  }, []);

  const signIn = async (data) => {
    setUser(data);
    await AsyncStorage.setItem("user", JSON.stringify(data));
  };

  const signOut = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
