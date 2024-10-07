import { Link, Stack } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../components/Icons";
import { ScreenLayout } from "../components/ScreenLayout";

export default function About() {
  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Link href={"/"} asChild>
              <Pressable>
                {({ pressed }) => (
                  <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
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
