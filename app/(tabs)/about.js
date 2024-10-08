import { ScrollView, Text } from "react-native";
import { ScreenLayout } from "../../components/ScreenLayout";

export default function About() {
  return (
    <ScreenLayout>
      <ScrollView>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white/90 mb-4">This app was made with ❤️</Text>
        <Text className="text-white/90 mb-4">
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text className="text-white/90 mb-4">
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text className="text-white/90 mb-4">
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text className="text-white/90 mb-4">
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </ScrollView>
    </ScreenLayout>
  );
}
