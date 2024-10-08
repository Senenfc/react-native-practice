import { View } from "react-native";

export function ScreenLayout({ children }) {
  return <View className="flex-1 pt-4 px-2 bg-black">{children}</View>;
}
