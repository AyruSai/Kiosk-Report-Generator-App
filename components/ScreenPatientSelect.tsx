// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// export default function ScreenPatientSelect({ patients, onSelect }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Select a patient</Text>
//       {patients.map((p) => (
//         <TouchableOpacity key={p.uhid} style={styles.item} onPress={() => onSelect(p)}>
//           <Text>{`${p.name}, ${p.age} Year(s)`}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Patient {
  name: string;
  age: number;
  uhid: string;
}
interface Props {
  patients: Patient[];
  onSelect: (p: Patient) => void;
}

export default function ScreenPatientSelect({ patients, onSelect }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a patient</Text>
      {patients.map((p) => (
        <TouchableOpacity
          key={p.uhid}
          onPress={() => onSelect(p)}
          style={styles.item}
        >
          <Text>{`${p.name}, ${p.age} Year(s)`}</Text>
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
