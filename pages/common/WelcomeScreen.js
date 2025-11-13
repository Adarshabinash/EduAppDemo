import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/welcome_screen_splash.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to Your Journey</Text>
          <Text style={styles.subtitle}>
            Let's begin a new experience together. Discover amazing features and
            endless possibilities.
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("GoogleAuth")}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
  },
  contentContainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: "60%",
    marginBottom: 30,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1565C0",
    textAlign: "center",
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 17,
    color: "#424242",
    textAlign: "center",
    lineHeight: 26,
    paddingHorizontal: 5,
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#1E88E5",
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 4,
    shadowColor: "#1E88E5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
