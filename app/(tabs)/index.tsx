import { View, StyleSheet } from "react-native";
import ImageComp from "@/components/ImageComp";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({//Display the system UI for choosing an image or a video from the phone
      allowsEditing: true,
      quality: 1,//.1 => very low | 1 hight
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert("you did not select any image");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageComp imgSource={selectedImage || PlaceholderImage} />{/* undefined => display PlaceholderImage */}
      </View>
      <View style={styles.footerContainer}>
        <Button onPress={pickImageAsync} label="Choose a photo" theme="primary" />
        <Button label="Use this photo" />
      </View>
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
  imageContainer: {
    flex: 1,
  },
  footerContainer:{
    flex: 1/3,
    alignItems: "center",
  }
});
