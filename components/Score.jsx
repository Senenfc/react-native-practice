import { Text, View } from "react-native";

export function Score({ score, maxScore }) {
  const getColor = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 98) {
      return "bg-green-500";
    } else if (percentage >= 97) {
      return "bg-yellow-500";
    } else {
      return "bg-red-500";
    }
  };

  const className = getColor();

  return (
    <View
      className={`${className} w-8 h-8 items-center justify-center rounded-full`}
    >
      <Text className="text-white font-bold text-lg">{score}</Text>
    </View>
  );
}
