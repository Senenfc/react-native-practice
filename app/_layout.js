import { Stack } from "expo-router";
import { View } from "react-native";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          contentStyle: {
            backgroundColor: "black",
          },
        }}
      />
    </View>
  );
}
