import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { AuthContext } from "./AuthContext";

const { width, height } = Dimensions.get("window");

export default function GoogleAuth({ navigation }) {
  const { signIn } = useContext(AuthContext);

  const mockSignIn = () => {
    const user = { name: "Test User", email: "test@example.com" };
    signIn(user);
    navigation.replace("Register");
  };

  return (
    <View style={styles.container}>
      {/* Background */}
      <View style={styles.background} />

      {/* Content */}
      <View style={styles.content}>
        {/* Logo/Icon */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>G</Text>
          </View>
        </View>

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to access your account</Text>

        {/* Google Sign In Button */}
        <TouchableOpacity style={styles.googleButton} onPress={mockSignIn}>
          <View style={styles.googleButtonContent}>
            <View style={styles.googleIcon}>
              <Text style={styles.googleIconText}>G</Text>
            </View>
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footerText}>
          By continuing, you agree to our{" "}
          <Text style={styles.linkText}>Terms of Service</Text> and{" "}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>

      {/* Decorative Elements */}
      <View style={styles.decorativeCircle1} />
      <View style={styles.decorativeCircle2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#E3F2FD",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    zIndex: 2,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#1a73e8",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 2,
    borderColor: "rgba(26, 115, 232, 0.1)",
  },
  logoText: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#1a73e8",
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1a73e8",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#5f6368",
    marginBottom: 60,
    textAlign: "center",
    lineHeight: 24,
  },
  googleButton: {
    backgroundColor: "white",
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 16,
    width: "100%",
    maxWidth: 300,
    shadowColor: "#1a73e8",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "rgba(26, 115, 232, 0.1)",
  },
  googleButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#4285f4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  googleIconText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  googleButtonText: {
    color: "#5f6368",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  footerText: {
    color: "#5f6368",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  linkText: {
    color: "#1a73e8",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  decorativeCircle1: {
    position: "absolute",
    top: -50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(26, 115, 232, 0.08)",
    zIndex: 1,
  },
  decorativeCircle2: {
    position: "absolute",
    bottom: -80,
    left: -80,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(26, 115, 232, 0.05)",
    zIndex: 1,
  },
});
