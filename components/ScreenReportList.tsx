import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Report {
  name: string;
  imageUri: string;
}
interface Props {
  reports: Report[];
  onView: (r: Report) => void;
}

export default function ScreenReportList({ reports, onView }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reports</Text>
      {reports.map((r) => (
        <TouchableOpacity
          key={r.name}
          onPress={() => onView(r)}
          style={styles.item}
        >
          <Text>{r.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, marginBottom: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: "#ccc" },
});
