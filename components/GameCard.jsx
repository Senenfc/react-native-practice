import { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { Score } from "./Score";

export function GameCard({ game }) {
  return (
    <View
      key={game.slug}
      className="flex-row items-center justify-between bg-gray-500/10 p-4 rounded-xl gap-4 mb-10"
    >
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text className="text-white text-xl font-bold mb-1">{game.title}</Text>
        <Score score={game.score} maxScore={100} />
        <Text className="text-white mt-2 flex-shrink">
          {game.description.slice(0, 100)} ...
        </Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [index, opacity]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
});
