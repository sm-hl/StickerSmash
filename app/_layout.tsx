import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ 
        headerTitle: "Sticker Smash", 
        headerLeft: ()=><></>,// to remove the left arrow if we navigate to this route
      }} />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      {/* add this route here just to remove the header of page, you can comment it and not found page still work */}
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}
