import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";

interface Report {
  name: string;
  imageUri: string;
}
interface Props {
  report: Report;
  onBack: () => void;
}

export default function ScreenReportView({ report, onBack }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>{report.name}</Text>
      <Image source={{ uri: report.imageUri }} style={styles.image} />
      <Button title="Back" onPress={onBack} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  header: { fontSize: 22, marginBottom: 15 },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
