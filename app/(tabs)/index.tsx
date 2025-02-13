import { View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import ImageComp from "@/components/ImageComp";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(
    undefined
  );

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      //Display the system UI for choosing an image or a video from the phone
      allowsEditing: true,
      quality: 1, //.1 => very low | 1 hight
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
      setShowAppOptions(true);
    } else {
      alert("you did not select any image");
    }
  };
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };
  const onSaveImageAsync = async () => {
    
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageComp imgSource={selectedImage || PlaceholderImage} />
        {/* undefined => display PlaceholderImage */}
        {pickedEmoji && (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          )}
      </View>
      {showAppOptions ? (
         <View style={styles.optionsContainer}>
         <View style={styles.optionsRow}>
           <IconButton icon="refresh" label="Reset" onPress={onReset} />
           <CircleButton onPress={onAddSticker} />
           <IconButton
             icon="save-alt"
             label="Save"
             onPress={onSaveImageAsync}
           />
         </View>
       </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            onPress={pickImageAsync}
            label="Choose a photo"
            theme="primary"
          />
          <Button onPress={()=> setShowAppOptions(true)} label="Use this photo" />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
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
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
