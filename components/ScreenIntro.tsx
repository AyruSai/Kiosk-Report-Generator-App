import React from "react";
import { View, Image, Text, Button, StyleSheet } from "react-native";
interface Props {
  onStart: () => void;
}
export default function ScreenIntro({ onStart }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://www.shutterstock.com/image-photo/one-tree-perfect-grass-field-600w-76166707.jpg" }} style={styles.image} />
      <Text style={styles.title}>Avoid the queue</Text>
      <Text>Get faster access to our services</Text>
      <Button title="Start" onPress={onStart} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
});
