import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
interface Props {
  onSubmit: (otp: string) => void;
}
export default function ScreenOTP({ onSubmit }: Props) {
  const [otp, setOtp] = useState("");
  return (
    <View style={styles.container}>
      <Text>Enter OTP sent to ******9999</Text>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={4}
      />
      <Button title="Verify" onPress={() => onSubmit(otp)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: { marginBottom: 20, fontSize: 16 },
  input: {
    borderWidth: 1,
    padding: 10,
    width: "50%",
    textAlign: "center",
    marginBottom: 20,
  },
});
