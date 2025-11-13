import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./AppStack";
import { AuthContext } from "../pages/common/AuthContext";
import SplashScreen from "../pages/common/SplashScreen";
import WelcomeScreen from "../pages/common/WelcomeScreen";
import GoogleAuth from "../pages/common/GoogleAuth";
import Register from "../pages/register/Register";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="App" component={AppStack} />
      ) : (
        <>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="GoogleAuth" component={GoogleAuth} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
}
