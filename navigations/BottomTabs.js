import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Animated } from "react-native";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";

const Tab = createBottomTabNavigator();

function TabBarIcon({ focused, color, size, activeName, inactiveName }) {
  const pulseValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (focused) {
      // Continuous pulse animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseValue, {
            toValue: 1.1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(pulseValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          })
        ])
      ).start();
    } else {
      // Stop animation and reset
      pulseValue.stopAnimation();
      Animated.timing(pulseValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [focused]);

  return (
    <Animated.View style={{ transform: [{ scale: pulseValue }] }}>
      <Ionicons 
        name={focused ? activeName : inactiveName}
        size={size} 
        color={color} 
      />
    </Animated.View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon 
              focused={focused}
              color={color}
              size={size}
              activeName="home"
              inactiveName="home-outline"
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon 
              focused={focused}
              color={color}
              size={size}
              activeName="person"
              inactiveName="person-outline"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}