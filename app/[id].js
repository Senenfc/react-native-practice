import { Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { ScreenLayout } from "../components/ScreenLayout";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then((gameInfo) => setGameInfo(gameInfo));
    }
  }, [id]);

  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#ffee00",
          },
          headerTintColor: "black",
          headerTitle: gameInfo?.title,
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"white"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center">
              <Text className="text-white font-bold text-xl mb-8">
                {gameInfo.title}
              </Text>
              <Image
                source={{ uri: gameInfo.img }}
                className="mb-4 rounded-md"
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white/70 mb-4">{gameInfo.description}</Text>
            </View>
          </ScrollView>
        )}
      </View>
    </ScreenLayout>
  );
}
