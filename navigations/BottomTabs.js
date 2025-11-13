import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
