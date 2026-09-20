import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

export default function Card({ icon, color, data, text, symbol }) {
  return (
    <View style={cardStyles.card}>
      <View style={[cardStyles.iconContainer, {backgroundColor: color + '20'}]}>
        <Ionicons name={icon} size={30} color={color} />
      </View>
      <Text style={cardStyles.primaryText}>
        {symbol}
        {data}
      </Text>
      <Text style={cardStyles.secondaryText}>{text}</Text>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10,
  },
  primaryText: {
    fontSize: 28,
    color: "#000000",
    fontFamily: "Inter_700Bold",
  },
  secondaryText: {
    fontSize: 16,
    color: "#6d6d6db6",
    fontFamily: "Inter_400Regular",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }
});
