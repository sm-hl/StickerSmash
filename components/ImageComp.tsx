import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
  imgSource: string,
}

export default function ImageComp({imgSource}:Props) {
  return <Image source={imgSource} style={styles.image} />
}

const styles = StyleSheet.create({
  image:{
    width: 320,
    height: 300,
    borderRadius: 18,
  }
});