import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import Dashboard from "../pages/dashboard/Dashboard";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
}
