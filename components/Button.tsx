import { View, Text, StyleSheet, Pressable } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: "primary";//optional variable
};

export default function Button({ label, theme }: Props) {
  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer, {borderWidth:1, borderColor:"#ffd33d", borderRadius:18}]}>
        <Pressable style={[styles.button, {backgroundColor: "#fff"}]} onPress={() => alert("Button pressed!")}>
          <FontAwesome name="picture-o" size={18} color="#000" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, {color:"#000"}]}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert("Button pressed!")}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 18,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  buttonLabel: {
    fontSize: 16,
    color: "#fff"
  },
  buttonIcon: {
    paddingRight: 8,
  }
});
