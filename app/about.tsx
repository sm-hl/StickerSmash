import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>About Screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  }
});
