import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in smoothly
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace("Welcome");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/welcome_screen_splash.png")}
        style={[styles.backgroundImage, { opacity: fadeAnim }]}
        resizeMode="cover"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dd944cf6",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
});
