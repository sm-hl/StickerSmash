import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello Expo.</Text>
      <Link href={"/about"} style={styles.button}>Go to About Screen</Link>
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
  },
  button: {
    color: "#fff",
    fontSize: 20,
    textDecorationLine: "underline",
  }
});
