import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./pages/common/AuthContext";
import RootNavigation from "./navigations/RootNavigation";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
