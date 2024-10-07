import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { Logo } from "../components/Logo";
import { styled } from "nativewind";
import { CircleInfoIcon } from "../components/Icons";

const StyledPressable = styled(Pressable);

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
          headerRight: () => (
            <Link href={"/about"} asChild>
              <StyledPressable className="active:opacity-20">
                <CircleInfoIcon />
              </StyledPressable>
            </Link>
          ),
          contentStyle: {
            backgroundColor: "black",
          },
        }}
      />
    </View>
  );
}
