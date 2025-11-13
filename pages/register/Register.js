import React, { useState, useContext } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { AuthContext } from "../common/AuthContext";

export default function Register({ navigation }) {
  const { user, signIn } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("12th");

  const submit = async () => {
    const updated = { ...user, name, phone, grade };
    await signIn(updated);
    navigation.replace("App");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Register</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <TextInput
        placeholder="Grade"
        value={grade}
        onChangeText={setGrade}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <Button title="Continue" onPress={submit} />
    </View>
  );
}
