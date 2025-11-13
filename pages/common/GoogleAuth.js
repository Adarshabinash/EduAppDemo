import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "./AuthContext";

export default function GoogleAuth({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const mockSignIn = () => {
    const user = { name: "Test User", email: "test@example.com" };
    signIn(user);
    navigation.replace("Register");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Google Auth (mock)</Text>
      <Button title="Sign in" onPress={mockSignIn} />
    </View>
  );
}
