import { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";

import { ScreenLayout } from "./ScreenLayout";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <ScreenLayout>
      <View>
        <Text className="text-white text-3xl font-bold mb-4">
          Welcome to Expo
        </Text>
      </View>
      {games.length === 0 ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(item) => item.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
