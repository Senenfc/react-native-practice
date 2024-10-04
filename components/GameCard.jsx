import { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

export function GameCard({ game }) {
  return (
    <View
      key={game.slug}
      className="flex-row items-center justify-between bg-gray-500/10 p-4 rounded-xl gap-4 mb-10"
    >
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text className="text-white text-xl font-bold mb-1">{game.title}</Text>
        <Text style={styles.score}>{game.score}</Text>
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
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    color: "#fff",
    marginTop: 5,
  },
  score: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },
});
